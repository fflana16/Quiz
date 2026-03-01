import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  GraduationCap,
  Stethoscope,
  Award
} from 'lucide-react';
import { questions } from './data/questions';
import { QuizState } from './types';

export default function App() {
  const [gameState, setGameState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  const handleOptionClick = (optionId: string) => {
    if (answeredQuestions[currentQuestionIndex] !== undefined) return;

    setAnsweredQuestions(prev => ({ ...prev, [currentQuestionIndex]: optionId }));
    setSelectedOptionId(optionId);

    const option = currentQuestion.options.find(o => o.id === optionId);
    if (option?.isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setGameState('result');
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionId(answeredQuestions[currentQuestionIndex + 1] || null);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedOptionId(answeredQuestions[currentQuestionIndex - 1] || null);
    }
  };

  const resetQuiz = () => {
    setGameState('welcome');
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setScore(0);
    setAnsweredQuestions({});
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-emerald-100">
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 text-center border border-slate-100"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-50 rounded-2xl mb-6">
                <GraduationCap className="w-10 h-10 text-emerald-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Quiz de Anatomia UNILESTE
              </h1>
              <p className="text-slate-500 text-lg mb-8 max-w-md mx-auto">
                Teste seus conhecimentos em Anatomia Aplicada à Odontologia e Osteologia dos Membros Inferiores.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-emerald-500" />
                    Anatomia Aplicada
                  </h3>
                  <p className="text-sm text-slate-500">Conceitos fundamentais e anatomia de cabeça e pescoço.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                    <Award className="w-4 h-4 text-emerald-500" />
                    Osteologia
                  </h3>
                  <p className="text-sm text-slate-500">Estudo detalhado dos ossos dos membros inferiores.</p>
                </div>
              </div>
              <button
                onClick={() => setGameState('quiz')}
                className="w-full md:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 group"
              >
                Começar Quiz
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {gameState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Header & Progress */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    {currentQuestion.category}
                  </span>
                  <span className="text-sm font-medium text-slate-400">
                    Questão {currentQuestionIndex + 1} de {questions.length}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-6 md:p-10 border border-slate-100 min-h-[400px] flex flex-col">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-8 leading-relaxed">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-3 flex-grow">
                  {currentQuestion.options.map((option) => {
                    const isAnswered = answeredQuestions[currentQuestionIndex] !== undefined;
                    const isSelected = answeredQuestions[currentQuestionIndex] === option.id;
                    const showCorrect = isAnswered && option.isCorrect;
                    const showWrong = isAnswered && isSelected && !option.isCorrect;

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionClick(option.id)}
                        disabled={isAnswered}
                        className={`
                          group relative w-full p-4 md:p-5 text-left rounded-2xl border-2 transition-all duration-200 flex items-center justify-between
                          ${!isAnswered ? 'border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30' : ''}
                          ${showCorrect ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : ''}
                          ${showWrong ? 'border-rose-500 bg-rose-50 text-rose-900' : ''}
                          ${isAnswered && !showCorrect && !showWrong ? 'border-slate-50 opacity-60 text-slate-400' : ''}
                        `}
                      >
                        <span className="text-base md:text-lg font-medium pr-8">
                          {option.text}
                        </span>
                        
                        {showCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />}
                        {showWrong && <XCircle className="w-6 h-6 text-rose-600 shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-50">
                  <button
                    onClick={handlePrevious}
                    disabled={isFirstQuestion}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-colors ${
                      isFirstQuestion 
                        ? 'text-slate-300 cursor-not-allowed' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Anterior
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={answeredQuestions[currentQuestionIndex] === undefined}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      answeredQuestions[currentQuestionIndex] === undefined
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200'
                    }`}
                  >
                    {isLastQuestion ? 'Finalizar' : 'Próxima'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 text-center border border-slate-100"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-50 rounded-full mb-6">
                <Award className="w-12 h-12 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Quiz Concluído!</h2>
              <p className="text-slate-500 mb-8">Confira seu desempenho abaixo:</p>
              
              <div className="bg-slate-50 rounded-3xl p-8 mb-10">
                <div className="text-6xl font-black text-emerald-600 mb-2">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-slate-600 font-medium">
                  Você acertou {score} de {questions.length} questões
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Tentar Novamente
                </button>
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setGameState('quiz');
                  }}
                  className="w-full md:w-auto px-8 py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-semibold hover:bg-slate-50 transition-all"
                >
                  Revisar Respostas
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-medium">
            © 2024 UNILESTE - Faculdade de Odontologia
          </p>
        </footer>
      </div>
    </div>
  );
}
