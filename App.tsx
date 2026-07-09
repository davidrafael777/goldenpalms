/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroScene, QuantumComputerScene } from './components/QuantumScene';
import { 
  AuditVisualizer, DirectChannelVisualizer, AISearchSimulator, 
  MultilingualAssetPreview, BudgetDistributionCalculator 
} from './components/Diagrams';
import { 
  ArrowDown, ArrowRight, Menu, X, BookOpen, Layers, Check, Send, 
  Sparkles, Building, Award, Calendar, DollarSign, MessageSquare 
} from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Lead collection state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedFormPlan, setSelectedFormPlan] = useState<'basic' | 'premium'>('premium');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    notes: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A09] text-stone-200 selection:bg-nobel-gold selection:text-stone-950 font-sans antialiased overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A09]/90 backdrop-blur-md border-b border-stone-900 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-8 h-8 bg-nobel-gold rounded-full flex items-center justify-center text-stone-950 font-serif font-bold text-xl shadow-md pb-1">GP</div>
            <span className="font-serif font-bold text-lg tracking-widest text-white">
              GOLDEN PALMS <span className="font-normal text-nobel-gold text-xs block md:inline md:ml-1 tracking-widest">ORLANDO</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] text-stone-400">
            <a href="#estandar" onClick={scrollToSection('estandar')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">1% Estandar</a>
            <a href="#auditoria" onClick={scrollToSection('auditoria')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Auditoría</a>
            <a href="#canal-directo" onClick={scrollToSection('canal-directo')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Canal Directo</a>
            <a href="#ia-motores" onClick={scrollToSection('ia-motores')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Motores IA</a>
            <a href="#multilingue" onClick={scrollToSection('multilingue')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Multilingüe</a>
            <a href="#presupuesto" onClick={scrollToSection('presupuesto')} className="hover:text-nobel-gold transition-colors cursor-pointer uppercase">Inversión</a>
            <a 
              href="#comenzar" 
              onClick={scrollToSection('comenzar')} 
              className="px-4 py-2 bg-nobel-gold text-stone-950 font-bold rounded hover:bg-white transition-all shadow-md cursor-pointer tracking-wider text-[10px]"
            >
              COMENZAR
            </a>
          </div>

          <button className="lg:hidden text-stone-100 p-2 border border-stone-800 rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A09] flex flex-col items-center justify-center gap-8 text-base tracking-widest font-semibold text-stone-300 animate-fade-in">
            <a href="#estandar" onClick={scrollToSection('estandar')} className="hover:text-nobel-gold transition-colors uppercase">El Estándar 1%</a>
            <a href="#auditoria" onClick={scrollToSection('auditoria')} className="hover:text-nobel-gold transition-colors uppercase">Diagnóstico</a>
            <a href="#canal-directo" onClick={scrollToSection('canal-directo')} className="hover:text-nobel-gold transition-colors uppercase">Canal Directo</a>
            <a href="#ia-motores" onClick={scrollToSection('ia-motores')} className="hover:text-nobel-gold transition-colors uppercase">Motores IA</a>
            <a href="#multilingue" onClick={scrollToSection('multilingue')} className="hover:text-nobel-gold transition-colors uppercase">Multilingüe</a>
            <a href="#presupuesto" onClick={scrollToSection('presupuesto')} className="hover:text-nobel-gold transition-colors uppercase">Inversión</a>
            <a 
              href="#comenzar" 
              onClick={scrollToSection('comenzar')} 
              className="px-6 py-3 bg-nobel-gold text-stone-950 font-bold rounded shadow-lg uppercase"
            >
              Comenzar Relanzamiento
            </a>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />
        
        {/* Luxury Vignette and Warm Radial Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(10,10,9,0.7)_0%,rgba(10,10,9,0.92)_50%,rgba(10,10,9,1)_100%)]" />

        <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
          <div className="inline-block mb-6 px-4 py-1.5 border border-nobel-gold/50 text-nobel-gold text-xs tracking-[0.25em] uppercase font-bold rounded-full backdrop-blur-sm bg-stone-900/40">
            Estrategia de Relanzamiento 2026
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight drop-shadow-md">
            Golden Palms <br/>
            <span className="italic font-normal text-stone-400 text-3xl md:text-5xl lg:text-6xl block mt-3 font-serif">
              Posicionamiento Digital Exclusivo
            </span>
          </h1>
          
          <div className="w-24 h-[1px] bg-nobel-gold mx-auto mb-8"></div>
          
          <p className="max-w-3xl mx-auto text-stone-300 text-base md:text-lg lg:text-xl font-light leading-relaxed mb-12">
            Optimización de conversiones y fortalecimiento de la presencia digital mediante una estrategia de reingeniería comercial y autonomía absoluta de canales.
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
             <a 
               href="#estandar" 
               onClick={scrollToSection('estandar')} 
               className="px-6 py-3.5 bg-nobel-gold text-stone-950 font-bold rounded hover:bg-white hover:text-stone-950 transition-all shadow-lg text-xs md:text-sm tracking-[0.15em] uppercase cursor-pointer"
             >
                Explorar Propuesta
             </a>
             <a 
               href="#comenzar" 
               onClick={scrollToSection('comenzar')} 
               className="px-6 py-3.5 bg-stone-900 text-white border border-stone-800 rounded hover:bg-stone-800 transition-all text-xs md:text-sm tracking-[0.15em] uppercase cursor-pointer"
             >
                Agendar Consulta
             </a>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
             <a href="#estandar" onClick={scrollToSection('estandar')} className="group flex flex-col items-center gap-1.5 text-[10px] tracking-[0.2em] text-stone-500 hover:text-nobel-gold transition-colors cursor-pointer">
                <span>INICIAR</span>
                <span className="p-2 border border-stone-800 rounded-full group-hover:border-nobel-gold transition-colors bg-stone-950/50">
                    <ArrowDown size={14} className="animate-bounce" />
                </span>
             </a>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: El Estandar del Top 1% */}
        <section id="estandar" className="py-24 md:py-32 bg-[#0A0A09] border-t border-stone-900 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10100F] to-transparent pointer-events-none"></div>
          
          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            <div className="text-center space-y-6">
              <span className="text-[11px] font-mono tracking-[0.25em] text-nobel-gold uppercase font-bold">FILOSOFÍA COMERCIAL</span>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight font-medium max-w-4xl mx-auto">
                El Estándar del Top 1%
              </h2>
              
              <div className="w-16 h-[2px] bg-nobel-gold mx-auto my-6"></div>
              
              <div className="p-8 md:p-12 bg-stone-900/40 rounded-2xl border border-stone-800 shadow-2xl relative overflow-hidden">
                {/* Visual quote accent */}
                <span className="absolute top-4 left-6 text-9xl font-serif text-nobel-gold/5 pointer-events-none select-none">“</span>
                
                <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-stone-200 leading-relaxed max-w-3xl mx-auto relative z-10">
                  Las propiedades vacacionales más exitosas de Florida no compiten por precio; compiten mediante el control absoluto de sus canales digitales.
                </p>
                
                <div className="mt-8 flex justify-center items-center gap-3 text-[10px] font-mono tracking-widest text-stone-500">
                  <span>GOLDEN PALMS • ORLANDO</span>
                  <span>•</span>
                  <span>PREMIUM BENCHMARK 2026</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Diagnóstico y Auditoría Algorítmica */}
        <section id="auditoria" className="py-24 md:py-32 bg-[#10100F] border-y border-stone-900">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-nobel-gold uppercase font-bold block mb-3">EL DIAGNÓSTICO</span>
                <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight">
                  Diagnóstico y Auditoría Algorítmica
                </h2>
                <div className="w-16 h-1 bg-nobel-gold mt-6 mb-6"></div>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Las plataformas como Airbnb y Booking.com actúan como silos que protegen sus propios intereses de cobro, penalizando o silenciando listados bajo la inercia de algoritmos restrictivos.
                </p>
              </div>
              <div className="lg:col-span-8">
                <AuditVisualizer />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Estrategia de Canal Directo */}
        <section id="canal-directo" className="py-24 md:py-32 bg-[#0A0A09] relative">
          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono tracking-[0.25em] text-nobel-gold uppercase font-bold block mb-3">LA SOLUCIÓN CLAVE</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
                Estrategia de Canal Directo
              </h2>
              <p className="text-stone-400 text-sm md:text-base mt-4 leading-relaxed">
                Construimos una infraestructura digital soberana que atrae de forma independiente al turista calificado, eliminando intermediarios y blindando tu facturación frente a bloqueos arbitrarios.
              </p>
            </div>

            <DirectChannelVisualizer />
          </div>
        </section>

        {/* Section 4: Optimización para Motores de IA */}
        <section id="ia-motores" className="py-24 md:py-32 bg-[#10100F] border-y border-stone-900">
          <div className="container mx-auto px-6 max-w-6xl">
            <AISearchSimulator />
          </div>
        </section>

        {/* Section 5: Estrategia Multilingüe Nativa */}
        <section id="multilingue" className="py-24 md:py-32 bg-[#0A0A09]">
          <div className="container mx-auto px-6 max-w-6xl">
            <MultilingualAssetPreview />
          </div>
        </section>

        {/* Section 6: Referente de Inspiración (Reunion Castle Benchmark) */}
        <section id="benchmark" className="py-24 md:py-32 bg-[#10100F] border-y border-stone-900 relative overflow-hidden">
          {/* Ambient light ring decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-nobel-gold/5 blur-[120px] pointer-events-none rounded-full"></div>

          <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-stone-900/80 border border-stone-800 rounded text-stone-400 text-[10px] font-mono uppercase tracking-wider">
                  <Award size={12} className="text-nobel-gold" /> Benchmark de Lujo
                </div>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                  Referente de Inspiración: <span className="italic font-normal block text-stone-400 mt-2">Reunion Castle</span>
                </h2>
                <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                  Hemos identificado a <strong>Reunion Castle</strong> como el estándar de oro en propiedades vacacionales de gran escala en Orlando. Con una infraestructura física de 23,400 pies cuadrados, representa la cúspide de la hospitalidad temática.
                </p>
                <p className="text-stone-400 text-xs md:text-sm leading-relaxed">
                  Nuestra meta es tomar este nivel de excelencia física y superarlo en la <strong>experiencia digital interactiva</strong>, optimizando radicalmente la tasa de conversión y la inmersión visual del usuario en la nueva web oficial de Golden Palms.
                </p>

                <div className="pt-6 border-t border-stone-800 flex items-center gap-4">
                  <a 
                    href="http://www.reunioncastle.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-nobel-gold hover:text-white transition-colors"
                  >
                    Ver Referente Real <ArrowRight size={14} />
                  </a>
                </div>
              </div>

              {/* Graphical illustration of luxury benchmark comparison */}
              <div className="bg-stone-950 p-6 md:p-8 rounded-xl border border-stone-800 space-y-6">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">Comparativa de Experiencia Digital</span>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-stone-400 mb-1">
                      <span>Experiencia Web Actual</span>
                      <span>35% - Básica</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-stone-700 w-[35%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-stone-300 mb-1">
                      <span>Reunion Castle (Estándar del Mercado)</span>
                      <span>75% - Premium</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden">
                      <div className="h-full bg-stone-400 w-[75%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-white mb-1">
                      <span className="text-nobel-gold font-bold">Golden Palms (Nuestra Meta Digital)</span>
                      <span className="text-nobel-gold font-bold">100% - Inmersiva 4K</span>
                    </div>
                    <div className="w-full h-1.5 bg-stone-900 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-nobel-gold shadow-[0_0_10px_rgba(197,160,89,0.5)]" 
                        initial={{ width: 0 }} 
                        whileInView={{ width: '100%' }} 
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#121211] rounded-lg border border-stone-900 space-y-2">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-nobel-gold block font-bold">Ecosistema Inmersivo</span>
                  <p className="text-stone-400 text-xs leading-relaxed">
                    Lograremos esto mediante sincronización iCal en tiempo real, recorridos cinemáticos virtuales 4K de alta velocidad y guías personalizadas multilenguaje nativas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Planes de Inversión y Distribución */}
        <section id="presupuesto" className="py-24 md:py-32 bg-[#0A0A09]">
          <div className="container mx-auto px-6 max-w-6xl">
            <BudgetDistributionCalculator />
          </div>
        </section>

        {/* Section 8: Call to Action / Interactive Onboarding */}
        <section id="comenzar" className="py-24 md:py-32 bg-gradient-to-b from-[#10100F] to-[#0A0A09] border-t border-stone-900">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-[10px] font-mono tracking-[0.25em] text-nobel-gold uppercase font-bold block mb-3">SIGUIENTE PASO</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
                ¿Comenzamos el Relanzamiento?
              </h2>
              <p className="text-stone-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                Elige el modelo de colaboración óptimo y configura la infraestructura inicial para catapultar el estatus digital de Golden Palms.
              </p>
            </div>

            {/* Simulated interactive onboarding form */}
            <div className="bg-[#121211] rounded-xl border border-stone-800 shadow-2xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-nobel-gold to-transparent opacity-60"></div>

              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  className="text-center py-12 space-y-6"
                >
                  <div className="w-16 h-16 bg-nobel-gold/10 border border-nobel-gold/30 rounded-full flex items-center justify-center mx-auto mb-4 text-nobel-gold">
                    <Check size={32} />
                  </div>
                  <h3 className="font-serif text-2xl text-white">¡Propuesta Solicitada Exitosamente!</h3>
                  <p className="text-stone-400 text-sm max-w-md mx-auto">
                    He guardado tus preferencias para el <strong>{selectedFormPlan === 'premium' ? 'Plan Integral Premium' : 'Plan Básico Mensual'}</strong>. Recibirás un correo y mensaje de seguimiento personalizado para iniciar la configuración de la infraestructura digital.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 bg-stone-900 text-stone-300 border border-stone-800 rounded hover:bg-stone-800 text-xs font-bold tracking-widest uppercase"
                  >
                    Editar Solicitud
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Model selector buttons */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block">Modelo de Colaboración Deseado:</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedFormPlan('premium')}
                        className={`p-4 rounded-lg border text-left transition-all ${selectedFormPlan === 'premium' ? 'border-nobel-gold bg-nobel-gold/5' : 'border-stone-800 bg-stone-950/50 hover:border-stone-700'}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-serif font-bold text-white text-sm">Plan Integral Premium</span>
                          {selectedFormPlan === 'premium' && <div className="w-2 h-2 rounded-full bg-nobel-gold"></div>}
                        </div>
                        <p className="text-[11px] text-stone-400 leading-normal">
                          Pago único promocional de $2,500 USD. Incluye virtualización interactiva, sincronización iCal 360° y 2 meses de gestión total.
                        </p>
                      </button>

                      <button
                        type="button"
                        onClick={() => setSelectedFormPlan('basic')}
                        className={`p-4 rounded-lg border text-left transition-all ${selectedFormPlan === 'basic' ? 'border-nobel-gold bg-nobel-gold/5' : 'border-stone-800 bg-stone-950/50 hover:border-stone-700'}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-serif font-bold text-white text-sm">Plan Básico Mensual</span>
                          {selectedFormPlan === 'basic' && <div className="w-2 h-2 rounded-full bg-nobel-gold"></div>}
                        </div>
                        <p className="text-[11px] text-stone-400 leading-normal">
                          Suscripción mensual de $850 USD. Tráfico pago quirúrgico y TikTok US Proxy con SIM físico para forzar alcance nativo.
                        </p>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block">Nombre Completo</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Ej. Rafael Dueñas" 
                        className="w-full bg-stone-950 border border-stone-800 focus:border-nobel-gold rounded px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder-stone-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block">Correo Electrónico de Contacto</label>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="ejemplo@correo.com" 
                        className="w-full bg-stone-950 border border-stone-800 focus:border-nobel-gold rounded px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder-stone-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block">WhatsApp de Contacto Directo</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        placeholder="+593 999 999 999" 
                        className="w-full bg-stone-950 border border-stone-800 focus:border-nobel-gold rounded px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder-stone-700"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-stone-400 block">Notas o Requerimientos Especiales</label>
                      <input 
                        type="text" 
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        placeholder="Ej. Preferencia de fecha de inicio..." 
                        className="w-full bg-stone-950 border border-stone-800 focus:border-nobel-gold rounded px-4 py-3 text-sm text-white focus:outline-none transition-all placeholder-stone-700"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-nobel-gold text-stone-950 hover:bg-white transition-all rounded font-bold text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2"
                  >
                    Solicitar Activación de Plan <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl">
            <div className="text-center md:text-left space-y-2">
                <div className="text-white font-serif font-bold text-xl tracking-wider">GOLDEN PALMS</div>
                <p className="text-xs max-w-sm text-stone-400">
                  Propuesta estratégica inmersiva de reingeniería comercial y posicionamiento exclusivo 2026.
                </p>
            </div>
            
            <div className="flex gap-6 text-xs text-stone-400">
              <span className="font-mono">ORLANDO, FLORIDA</span>
              <span>•</span>
              <span className="font-mono">RELAUNCH DECK 2026</span>
            </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-stone-600 font-mono">
            © 2026 Golden Palms. Documento Confidencial y de Uso Exclusivo. Diseñado con Rigor y Elegancia.
        </div>
      </footer>
    </div>
  );
};

export default App;

