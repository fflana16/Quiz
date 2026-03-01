import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Dna,
  Bone,
  Microscope,
  Target,
  ArrowRight,
  Info,
  Trophy,
  Heart,
  Brain,
  Activity,
  Stethoscope,
  Thermometer
} from 'lucide-react';
import { questions } from './data/questions';
import { QuizState } from './types';

export default function App() {
  const [gameState, setGameState] = useState<QuizState>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Record<number, string>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;

  // Visual identification based on category
  const isUpperAnatomy = currentQuestion?.category.includes('Anatomia Aplicada');
  const theme = isUpperAnatomy 
    ? { 
        primary: 'text-blue-600',
        bg: 'bg-blue-50',
        border: 'border-blue-600',
        btn: 'bg-blue-600 hover:bg-blue-700',
        icon: <Dna className="w-5 h-5" />,
        label: 'ANATOMIA APLICADA'
      } 
    : { 
        primary: 'text-amber-600',
        bg: 'bg-amber-50',
        border: 'border-amber-600',
        btn: 'bg-amber-600 hover:bg-amber-700',
        icon: <Bone className="w-5 h-5" />,
        label: 'OSTEOLOGIA INFERIOR'
      };

  const handleOptionClick = (optionId: string) => {
    if (answeredQuestions[currentQuestionIndex] !== undefined) return;
    setAnsweredQuestions(prev => ({ ...prev, [currentQuestionIndex]: optionId }));
    const option = currentQuestion.options.find(o => o.id === optionId);
    if (option?.isCorrect) setScore(prev => prev + 1);
  };

  const handleNext = () => {
    if (isLastQuestion) setGameState('result');
    else setCurrentQuestionIndex(prev => prev + 1);
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) setCurrentQuestionIndex(prev => prev - 1);
  };

  const resetQuiz = () => {
    setGameState('welcome');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions({});
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen font-sans data-grid">
      <div className="max-w-5xl mx-auto px-4 py-12">
        
        <AnimatePresence mode="wait">
          {gameState === 'welcome' && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="scientific-card border-t-8 border-t-blue-600 p-8 md:p-16 relative overflow-hidden"
            >
              {/* Background Decorative Icons */}
              <div className="absolute -right-10 -top-10 opacity-[0.03] pointer-events-none">
                <Heart className="w-64 h-64" />
              </div>
              <div className="absolute -left-10 -bottom-10 opacity-[0.03] pointer-events-none">
                <Brain className="w-64 h-64" />
              </div>

              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1 space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-mono text-sm font-bold tracking-widest">
                      <Microscope className="w-4 h-4" />
                      UNILESTE / ODONTOLOGIA
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
                      Protocolo <br />
                      <span className="text-blue-600">Anatômico</span>
                    </h1>
                  </div>
                  
                  <p className="text-slate-600 text-xl font-bold leading-relaxed max-w-md border-l-4 border-blue-600 pl-4">
                    Aula 1- Introdução à Anatomia e Fisiologia
                  </p>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] pl-4">
                    Alunas: Ana Lívia • Esther
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 font-mono text-xs font-bold border border-slate-200">
                      <Target className="w-3 h-3" /> 20 QUESTÕES
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 font-mono text-xs font-bold border border-slate-200">
                      <Info className="w-3 h-3" /> TURMA NOTURNO
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 font-mono text-xs font-bold border border-slate-200">
                      <Activity className="w-3 h-3" /> FISIOLOGIA
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 font-mono text-xs font-bold border border-slate-200">
                      <Stethoscope className="w-3 h-3" /> CLÍNICA
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 font-mono text-xs font-bold border border-slate-200">
                      <Thermometer className="w-3 h-3" /> DIAGNÓSTICO
                    </div>
                  </div>

                  <button
                    onClick={() => setGameState('quiz')}
                    className="btn-scientific bg-slate-900 text-white border-slate-900 hover:bg-blue-600 hover:border-blue-600 flex items-center gap-4 group"
                  >
                    INICIAR AVALIAÇÃO
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="hidden md:block w-1/3 aspect-square bg-slate-50 border-2 border-dashed border-slate-200 rounded-full flex items-center justify-center relative">
                   <div className="absolute inset-4 border-2 border-blue-100 rounded-full animate-pulse" />
                   <Skull className="w-24 h-24 text-slate-300" />
                </div>
              </div>
            </motion.div>
          )}

          {gameState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Technical Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 bg-white p-6 border border-slate-200">
                <div className="space-y-1">
                  <div className={`flex items-center gap-2 font-mono text-xs font-bold tracking-widest ${theme.primary}`}>
                    {theme.icon}
                    {theme.label}
                  </div>
                  <div className="text-3xl font-black tracking-tighter uppercase">
                    Questão {String(currentQuestionIndex + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="hidden lg:flex items-center gap-4 border-r border-slate-200 pr-8">
                    <Heart className="w-4 h-4 text-red-500" />
                    <Brain className="w-4 h-4 text-purple-500" />
                    <Activity className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progresso</div>
                    <div className="text-xl font-mono font-bold">{Math.round(progress)}%</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Acertos</div>
                    <div className="text-xl font-mono font-bold text-blue-600">{score}</div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 w-full bg-slate-200">
                <motion.div 
                  className={`h-full ${isUpperAnatomy ? 'bg-blue-600' : 'bg-amber-600'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                />
              </div>

              {/* Main Question Area */}
              <div className="scientific-card p-8 md:p-12 relative">
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-slate-300 pointer-events-none">
                  ID_REF: {currentQuestion.id} // CATEGORIA: {currentQuestion.category.toUpperCase()}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 leading-tight max-w-3xl">
                  {currentQuestion.text}
                </h2>

                <div className="grid gap-2">
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
                          group relative w-full p-5 text-left transition-all border-2 flex items-center justify-between
                          ${!isAnswered ? 'border-slate-100 bg-slate-50 hover:border-slate-300 hover:bg-white' : ''}
                          ${showCorrect ? 'border-blue-600 bg-blue-50 text-blue-900' : ''}
                          ${showWrong ? 'border-red-600 bg-red-50 text-red-900' : ''}
                          ${isAnswered && !showCorrect && !showWrong ? 'border-slate-50 opacity-40 grayscale' : ''}
                        `}
                      >
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                            [{option.id.toUpperCase()}]
                          </span>
                          <span className="text-lg font-medium">
                            {option.text.replace(/^[A-D]\.\s/, '')}
                          </span>
                        </div>
                        
                        {showCorrect && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                        {showWrong && <XCircle className="w-5 h-5 text-red-600" />}
                      </button>
                    );
                  })}
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
                  <button
                    onClick={handlePrevious}
                    disabled={isFirstQuestion}
                    className={`btn-scientific border-transparent ${
                      isFirstQuestion ? 'text-slate-300 cursor-not-allowed' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <ChevronLeft className="w-4 h-4" /> ANTERIOR
                    </div>
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={answeredQuestions[currentQuestionIndex] === undefined}
                    className={`btn-scientific ${
                      answeredQuestions[currentQuestionIndex] === undefined
                        ? 'bg-slate-100 border-slate-100 text-slate-400 cursor-not-allowed'
                        : `${theme.btn} border-transparent text-white shadow-lg`
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isLastQuestion ? 'FINALIZAR' : 'PRÓXIMA'} <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {gameState === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="scientific-card border-t-8 border-t-blue-600 p-8 md:p-16 text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-full mb-8">
                <Trophy className="w-10 h-10 text-blue-600" />
              </div>
              
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">Relatório de Desempenho</h2>
              <p className="text-slate-500 font-mono text-sm mb-4">AVALIAÇÃO FINALIZADA COM SUCESSO</p>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
                Alunas: Ana Lívia • Esther
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-12 bg-slate-200 p-1">
                <div className="bg-white p-8">
                  <div className="text-4xl font-black text-blue-600 mb-1">
                    {Math.round((score / questions.length) * 100)}%
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Precisão</div>
                </div>
                <div className="bg-white p-8">
                  <div className="text-4xl font-black text-slate-900 mb-1">
                    {score}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Acertos</div>
                </div>
                <div className="bg-white p-8">
                  <div className="text-4xl font-black text-slate-900 mb-1">
                    {questions.length - score}
                  </div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Erros</div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <button
                  onClick={resetQuiz}
                  className="btn-scientific bg-slate-900 text-white border-slate-900 hover:bg-blue-600 hover:border-blue-600 w-full md:w-auto"
                >
                  REINICIAR TESTE
                </button>
                <button
                  onClick={() => {
                    setCurrentQuestionIndex(0);
                    setGameState('quiz');
                  }}
                  className="btn-scientific bg-white text-slate-900 border-slate-200 hover:bg-slate-50 w-full md:w-auto"
                >
                  REVISAR QUESTÕES
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className="mt-16 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-black text-[10px]">U</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
              UNILESTE • ODONTOLOGIA
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em]">
              Turma Noturno - 2026
            </div>
            <div className="text-[9px] font-medium text-slate-500 uppercase tracking-[0.1em]">
              Alunas: Ana Lívia • Esther
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

const Skull = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 10L9.01 10" />
    <path d="M15 10L15.01 10" />
    <path d="M10 20V18H14V20" />
    <path d="M12 2C7.03 2 3 6.03 3 11C3 13.5 4 15.5 5.5 17L5 22H19L18.5 17C20 15.5 21 13.5 21 11C21 6.03 16.97 2 12 2Z" />
  </svg>
);
