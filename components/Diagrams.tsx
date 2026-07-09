/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, Layers, Search, Globe, Smartphone, ArrowRight, 
  DollarSign, Check, Percent, Play, RotateCcw, BarChart2, MessageSquare, AlertCircle
} from 'lucide-react';

// --- 1. AUDIT & DIAGNOSIS VISUALIZER ---
export const AuditVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'airbnb' | 'booking' | 'static'>('airbnb');

  const content = {
    airbnb: {
      title: "Penalización en Airbnb",
      subtitle: "Shadowban Técnico de Algoritmo",
      description: "Debido a reseñas pasadas e historial de cancelaciones de administradores previos, el algoritmo penaliza el listado. Tu anuncio queda relegado a las últimas páginas, resultando en tráfico orgánico nulo.",
      metricLabel: "Tráfico Orgánico Diario",
      metricBefore: "850 visitas/mes",
      metricAfter: "0 visitas (Shadowban)",
      severity: "Crítica",
      color: "#EF4444",
      action: "Creación de canal directo 100% independiente para blindar la autonomía del negocio."
    },
    booking: {
      title: "Inercia en Booking.com",
      subtitle: "Falta de Tracción Crítica",
      description: "Sin una masa crítica de reseñas verificadas de alto valor y un flujo constante de reservas iniciales, la plataforma no activa el multiplicador de visibilidad para audiencias premium.",
      metricLabel: "Conversión de Pauta de Lujo",
      metricBefore: "0.15% de reservas",
      metricAfter: "Meta: >2.8% con iCal sincronizado",
      severity: "Alta",
      color: "#F59E0B",
      action: "Sincronización iCal de 360° y pauta quirúrgica para forzar el algoritmo de Booking."
    },
    static: {
      title: "Formato Estático Limitado",
      subtitle: "Falta de Engagement Moderno",
      description: "La dependencia exclusiva de 54 fotos planas y sin movimiento no logra capturar el interés del turista moderno en redes sociales (TikTok/Reels), que prefiere contenido cinemático inmersivo 4K.",
      metricLabel: "Retención de Usuario en Pauta",
      metricBefore: "1.2 segundos por post",
      metricAfter: "Meta: >18 segundos con Reel IA 4K",
      severity: "Media",
      color: "#3B82F6",
      action: "Producción de Reels cinemáticos con curaduría arquitectónica y recorridos virtuales interactivos."
    }
  };

  const current = content[activeTab];

  return (
    <div className="flex flex-col bg-[#121211] text-stone-100 rounded-xl border border-stone-800 shadow-xl overflow-hidden p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-nobel-gold">Auditoría Algorítmica</h3>
        <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500">Diagnóstico 2026</span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-8">
        {(['airbnb', 'booking', 'static'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2.5 px-2 text-xs md:text-sm font-medium rounded-lg border transition-all duration-300 ${activeTab === tab ? 'bg-nobel-gold text-stone-950 border-nobel-gold shadow-md shadow-nobel-gold/10 font-bold' : 'bg-stone-900/50 text-stone-400 border-stone-800 hover:border-stone-700 hover:text-stone-200'}`}
          >
            {tab === 'airbnb' && "Airbnb Ban"}
            {tab === 'booking' && "Booking Inercia"}
            {tab === 'static' && "Fotos Estáticas"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          {/* Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-red-950 text-red-400 border border-red-800 font-bold uppercase">
                Gravedad: {current.severity}
              </span>
              <span className="text-stone-500 text-xs font-mono">• {current.subtitle}</span>
            </div>

            <h4 className="text-xl font-serif text-white">{current.title}</h4>
            <p className="text-stone-400 text-sm leading-relaxed">{current.description}</p>

            <div className="p-4 bg-stone-900/40 rounded-lg border border-stone-800">
              <span className="text-[10px] uppercase font-mono tracking-wider text-nobel-gold block mb-1">Estrategia Correctiva</span>
              <p className="text-stone-300 text-xs leading-relaxed">{current.action}</p>
            </div>
          </div>

          {/* Interactive Metric visualization */}
          <div className="md:col-span-5 flex flex-col justify-center items-center bg-stone-950/80 p-6 rounded-xl border border-stone-800/80">
            <span className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-6 text-center">
              {current.metricLabel}
            </span>

            {/* Simulated bar or impact circle */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-stone-800"></div>
              <motion.div 
                className="absolute w-28 h-28 rounded-full border-2 border-stone-700/30"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              {activeTab === 'airbnb' ? (
                <div className="flex flex-col items-center z-10 text-center">
                  <ShieldAlert size={36} className="text-red-500 mb-2 animate-bounce" />
                  <span className="text-xs font-bold text-red-400">ORGANIC BLOCK</span>
                  <span className="text-2xl font-serif font-bold text-white mt-1">0%</span>
                </div>
              ) : activeTab === 'booking' ? (
                <div className="flex flex-col items-center z-10 text-center">
                  <RotateCcw size={36} className="text-amber-500 mb-2 animate-spin" style={{ animationDuration: '6s' }} />
                  <span className="text-xs font-bold text-amber-400">INERTIA DROP</span>
                  <span className="text-2xl font-serif font-bold text-white mt-1">0.15%</span>
                </div>
              ) : (
                <div className="flex flex-col items-center z-10 text-center">
                  <Smartphone size={36} className="text-blue-500 mb-2" />
                  <span className="text-xs font-bold text-blue-400">LOST INTEREST</span>
                  <span className="text-2xl font-serif font-bold text-white mt-1">1.2s</span>
                </div>
              )}
            </div>

            <div className="w-full grid grid-cols-2 gap-4 mt-6 text-center text-xs">
              <div className="border-r border-stone-800">
                <span className="text-stone-500 block">Actual</span>
                <span className="font-mono text-stone-300 font-medium">{current.metricBefore}</span>
              </div>
              <div>
                <span className="text-nobel-gold block">Bajo Estrategia</span>
                <span className="font-mono text-white font-bold">{current.metricAfter}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


// --- 2. DIRECT CHANNEL VS OTA COMPARISON ---
export const DirectChannelVisualizer: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
      {/* Direct Channel benefits */}
      <div className="bg-[#121211] p-6 md:p-8 rounded-xl border border-stone-800 text-stone-100 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-950/50 border border-emerald-900 rounded text-emerald-400 text-[10px] font-mono uppercase tracking-wider mb-4">
            <Check size={10} /> Canal Propio (100% Autónomo)
          </div>
          <h4 className="font-serif text-2xl text-white mb-4">Canal Directo Exclusivo</h4>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            Al independizar tu canal, asumes control total sobre las reservas, evitas comisiones injustas de intermediarios, instalas tus propios píxeles de remarketing y construyes una base de datos propia e invaluable de huéspedes de élite.
          </p>

          <ul className="space-y-3">
            {[
              "0% de comisiones a plataformas intermediarias.",
              "Instalación de píxeles Meta/TikTok para retargeting inteligente.",
              "Ingreso directo a Google Vacation Rentals de forma orgánica.",
              "Inmunidad absoluta frente a cambios de algoritmos o bloqueos repentinos."
            ].map((text, idx) => (
              <li key={idx} className="flex gap-2 text-xs text-stone-300">
                <span className="text-nobel-gold font-bold">✓</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500 block">Autonomía de Negocio</span>
            <span className="text-2xl font-serif text-emerald-400 font-bold">100% Control</span>
          </div>
          <div className="w-24 h-2 bg-emerald-950 rounded-full overflow-hidden">
            <motion.div className="h-full bg-emerald-500" initial={{ width: 0 }} whileInView={{ width: '100%' }} transition={{ duration: 1 }} />
          </div>
        </div>
      </div>

      {/* Traditional OTAs vulnerabilities */}
      <div className="bg-[#121211] p-6 md:p-8 rounded-xl border border-stone-800 text-stone-100 flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-950/50 border border-red-900 rounded text-red-400 text-[10px] font-mono uppercase tracking-wider mb-4">
            <AlertCircle size={10} /> Dependencia de OTAs (Airbnb/Booking)
          </div>
          <h4 className="font-serif text-2xl text-white mb-4">Intermediación Tradicional</h4>
          <p className="text-stone-400 text-sm leading-relaxed mb-6">
            Depender de terceros te expone a penalizaciones algorítmicas imprevistas y fugas masivas de ingresos por tarifas de canal, dejándote sin comunicación directa con tu propio cliente recurrente.
          </p>

          <ul className="space-y-3">
            {[
              "Pérdida de hasta el 15-20% de cada reserva en comisiones ocultas.",
              "Cero datos de contacto directos del huésped para retargeting.",
              "Competencia brutal y directa por precio en la misma página de listado.",
              "Riesgo de baneo arbitrario por políticas unilaterales de la plataforma."
            ].map((text, idx) => (
              <li key={idx} className="flex gap-2 text-xs text-stone-300">
                <span className="text-red-500 font-bold">✕</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-800 flex items-center justify-between">
          <div>
            <span className="text-xs text-stone-500 block">Autonomía de Negocio</span>
            <span className="text-2xl font-serif text-red-400 font-bold">0% Control</span>
          </div>
          <div className="w-24 h-2 bg-red-950/30 rounded-full overflow-hidden">
            <motion.div className="h-full bg-red-500" initial={{ width: '100%' }} whileInView={{ width: '0%' }} transition={{ duration: 1 }} />
          </div>
        </div>
      </div>
    </div>
  );
};


// --- 3. AI SEMANTIC SEARCH ENGINE SIMULATOR ---
export const AISearchSimulator: React.FC = () => {
  const [selectedQuery, setSelectedQuery] = useState<string>("");
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState(false);

  const presetQueries = [
    "recomiéndame una villa familiar segura, cerca de Disney, con piscina temperada",
    "luxury private villa with resort-style amenities and interactive digital guides in Orlando",
    "exclusive corporate retreat with premium architecture and high-resolution layout matching"
  ];

  const handlePresetClick = (query: string) => {
    setSelectedQuery(query);
    setTypedText("");
    setIsTyping(true);
    setActiveAnalysis(false);
  };

  useEffect(() => {
    if (!isTyping || !selectedQuery) return;
    
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(selectedQuery.slice(0, i + 1));
      i++;
      if (i >= selectedQuery.length) {
        setIsTyping(false);
        setActiveAnalysis(true);
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isTyping, selectedQuery]);

  const getSGESemanticMatch = () => {
    if (selectedQuery.includes("Disney") || selectedQuery.includes("familiar")) {
      return {
        matchScore: "98% Match Semántico",
        justification: "Nuestra landing optimizada incluye metadatos semánticos que conectan directamente con la ubicación exacta (Orlando, a 12 minutos de Disney), describe el sistema de piscina climatizada inteligente, y especifica las suites de alta seguridad familiar.",
        actionable: "Perfectamente indexado para ChatGPT y Google SGE."
      };
    } else if (selectedQuery.includes("resort-style") || selectedQuery.includes("luxury")) {
      return {
        matchScore: "96% Match Semántico",
        justification: "El descriptor del sitio web asocia el benchmarking con 'Reunion Castle' y resalta las amenidades de resort premium en Orlando, junto con la guía digital premium integrada para huéspedes de élite.",
        actionable: "Aparece orgánicamente en búsquedas conversacionales de lenguaje natural."
      };
    } else {
      return {
        matchScore: "95% Match Semántico",
        justification: "El motor detecta correspondencias con la arquitectura curada descrita en los activos premium digitales y la pauta de inversión orientada a familias de alto poder adquisitivo.",
        actionable: "Indexación semántica optimizada para clientes corporativos de alto valor."
      };
    }
  };

  return (
    <div className="flex flex-col bg-stone-900 text-stone-100 rounded-xl border border-stone-800 shadow-xl overflow-hidden p-6 md:p-8 my-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-serif text-2xl text-nobel-gold">Optimización para Motores de IA</h3>
          <p className="text-xs text-stone-400 mt-1">Cómo los buscadores conversacionales recomiendan tu propiedad</p>
        </div>
        <span className="self-start md:self-auto text-[10px] font-mono px-2 py-1 bg-stone-800 border border-stone-700 text-nobel-gold rounded uppercase">
          AI-SGE & ChatGPT Ready
        </span>
      </div>

      <p className="text-sm text-stone-300 mb-6 leading-relaxed">
        Los buscadores modernos recomiendan propiedades basándose en un <strong>análisis semántico profundo</strong> en lugar de simples palabras clave. Prueba a simular una consulta de lenguaje natural a continuación:
      </p>

      {/* Selector of queries */}
      <div className="space-y-2.5 mb-6">
        <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block">Haz clic para probar una búsqueda conversacional:</span>
        {presetQueries.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handlePresetClick(q)}
            className="w-full text-left p-3 rounded-lg bg-stone-950 hover:bg-stone-800/80 border border-stone-800 hover:border-stone-700 text-xs md:text-sm font-mono text-stone-300 hover:text-white transition-all flex items-center gap-3"
          >
            <Search size={14} className="text-nobel-gold shrink-0" />
            <span className="truncate">{q}</span>
          </button>
        ))}
      </div>

      {/* Simulator Terminal */}
      <div className="bg-black rounded-lg border border-stone-800 p-5 font-mono text-xs md:text-sm min-h-[160px] flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-4 border-b border-stone-800 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <span className="text-[10px] text-stone-500 ml-2">SIMULADOR SEMÁNTICO DE IA v1.2</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-stone-500 shrink-0">User:</span>
              <p className="text-stone-200">
                {typedText}
                {isTyping && <span className="inline-block w-1.5 h-4 bg-nobel-gold animate-pulse ml-1"></span>}
                {!selectedQuery && <span className="italic text-stone-600">Elige un preset arriba para comenzar la simulación...</span>}
              </p>
            </div>

            {activeAnalysis && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }} 
                className="space-y-3 pt-3 border-t border-stone-900"
              >
                <div className="flex items-center gap-2 text-emerald-400">
                  <Check size={14} />
                  <span className="font-bold">{getSGESemanticMatch().matchScore}</span>
                </div>
                <div className="pl-4 border-l border-nobel-gold/40 text-stone-400 leading-relaxed space-y-1">
                  <p className="text-stone-300 font-sans text-xs md:text-sm">{getSGESemanticMatch().justification}</p>
                  <p className="text-[10px] text-nobel-gold uppercase tracking-wider pt-1">{getSGESemanticMatch().actionable}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- 4. MULTILINGUAL ASSET PREVIEW ---
export const MultilingualAssetPreview: React.FC = () => {
  const [lang, setLang] = useState<'ES' | 'EN' | 'FR' | 'DE'>('ES');

  const brochureData = {
    ES: {
      badge: "ESTRATEGIA EXCLUSIVA",
      title: "Guía Digital Exclusiva",
      description: "Desarrollamos todo el ecosistema de marketing y activos digitales en idiomas nativos para conectar emocionalmente con los turistas globales de mayor presupuesto.",
      features: [
        "SEO Internacional Avanzado para búsquedas europeas y americanas.",
        "Traducción cultural adaptada, no mecánica, para elevar el estatus de la propiedad.",
        "Guía digital de bienvenida interactiva para asegurar calificaciones de 5 estrellas."
      ]
    },
    EN: {
      badge: "EXCLUSIVE STRATEGY",
      title: "Premium Digital Guide",
      description: "We develop the entire marketing ecosystem and digital assets in native languages to build emotional connections with high-budget global travelers.",
      features: [
        "Advanced International SEO tailored for European and American organic searches.",
        "Culturally adapted copy, not machine translation, to elevate the property's status.",
        "Interactive digital welcome guidebook to guarantee pristine 5-star reviews."
      ]
    },
    FR: {
      badge: "STRATÉGIE EXCLUSIVE",
      title: "Guide Numérique de Prestige",
      description: "Nous développons l'ensemble de l'écosystème marketing et des actifs digitaux en langues maternelles pour séduire les voyageurs internationaux à haut budget.",
      features: [
        "SEO international avancé optimisé pour les moteurs de recherche européens.",
        "Textes adaptés aux codes culturels du luxe pour rehausser le standing de la villa.",
        "Livre d'accueil interactif premium garantissant des avis irréprochables (5 étoiles)."
      ]
    },
    DE: {
      badge: "EXKLUSIVE STRATEGIE",
      title: "Premium Digitaler Reiseführer",
      description: "Wir entwickeln das gesamte Marketing-Ökosystem und alle digitalen Assets in Muttersprachen, um eine emotionale Bindung zu solventen globalen Gästen aufzubauen.",
      features: [
        "Erweitertes internationales SEO für organische Suchen in Europa und den USA.",
        "Kulturell angepasste Premium-Texte statt maschineller Übersetzung.",
        "Interaktiver digitaler Gästeführer zur dauerhaften Sicherung von 5-Sterne-Bewertungen."
      ]
    }
  };

  const current = brochureData[lang];

  return (
    <div className="flex flex-col bg-[#121211] text-stone-100 rounded-xl border border-stone-800 shadow-xl overflow-hidden p-6 md:p-8 my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-nobel-gold">Estrategia Multilingüe Nativa</h3>
        
        {/* Language selector pills */}
        <div className="flex gap-1 bg-stone-900 p-1 rounded-lg border border-stone-800">
          {(['ES', 'EN', 'FR', 'DE'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-2 md:px-3 py-1 text-xs font-bold rounded-md transition-all ${lang === l ? 'bg-nobel-gold text-stone-950' : 'text-stone-400 hover:text-stone-200'}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Mock Brochure Layout */}
        <div className="lg:col-span-5 bg-gradient-to-b from-[#1E1E1D] to-[#0E0E0E] p-6 rounded-xl border border-stone-800 shadow-2xl relative overflow-hidden flex flex-col justify-between aspect-[3/4] max-w-sm mx-auto w-full">
          {/* Elegant gold design details */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-nobel-gold/5 blur-[50px]"></div>
          <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-nobel-gold to-transparent opacity-40"></div>

          <div className="space-y-4">
            <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-nobel-gold font-bold block">
              {current.badge}
            </span>
            <h4 className="font-serif text-3xl text-white leading-tight">
              {current.title}
            </h4>
            <div className="w-12 h-[1px] bg-nobel-gold opacity-60"></div>
            <p className="text-stone-400 text-xs leading-relaxed font-sans">
              {current.description}
            </p>
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex justify-between items-center text-[10px] font-mono text-stone-500 border-t border-stone-900 pt-4">
              <span>GOLDEN PALMS • ORLANDO</span>
              <span>2026</span>
            </div>
            {/* Interactive QR-code simulation */}
            <div className="flex items-center gap-3 bg-stone-950 p-2.5 rounded border border-stone-900">
              <div className="w-10 h-10 bg-white p-0.5 rounded shrink-0 flex flex-wrap gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className={`w-1.5 h-1.5 ${Math.random() > 0.4 ? 'bg-black' : 'bg-transparent'}`}></div>
                ))}
              </div>
              <div>
                <span className="text-[9px] font-mono font-bold text-stone-300 block uppercase">Scan Digital Guide</span>
                <span className="text-[8px] text-stone-500 block">5-Star Guest Shield</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic values */}
        <div className="lg:col-span-7 space-y-6">
          <h4 className="text-xl font-serif text-white">Inclusión para el Turista Global</h4>
          <p className="text-stone-400 text-sm leading-relaxed">
            No adaptamos los textos mediante traductores automatizados robóticos. Desarrollamos adaptaciones de mensajes que respetan los matices culturales de huéspedes alemanes, franceses, americanos e hispanohablantes de alto poder adquisitivo.
          </p>

          <div className="space-y-3.5">
            {current.features.map((feature, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-nobel-gold/10 border border-nobel-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[10px] text-nobel-gold font-bold font-mono">{i+1}</span>
                </div>
                <p className="text-stone-300 text-xs md:text-sm leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-stone-900/50 rounded-lg border border-stone-800 italic text-xs text-stone-400">
            "El público turista internacional es el motor principal para elevar el estatus digital de la villa y desbloquear reservas de múltiples semanas."
          </div>
        </div>
      </div>
    </div>
  );
};


// --- 5. BUDGET DISTRIBUTION CALCULATOR ---
export const BudgetDistributionCalculator: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium'>('premium');

  // Slide 9 data
  const budgetData = {
    basic: {
      total: "$850",
      period: "/ mes",
      details: [
        { name: "Licencias de Software de IA Avanzada", val: "$220.00" },
        { name: "Infraestructura de Redes & Pixels (web)", val: "$160.00" },
        { name: "Infraestructura Web, SSL & APIs de Pago", val: "$0.00" },
        { name: "Arquitectura de Canales & Activos Orgánicos", val: "$165.00" },
        { name: "Nube, Almacenamiento & Soporte", val: "$70.00" },
        { name: "Honorarios de Gestión (30%)", val: "$255.00" }
      ],
      highlights: [
        "Meta Ads segmentado para familias de élite en LATAM & USA.",
        "TikTok US Proxy (infraestructura con SIM física para forzar alcance nativo).",
        "Rediseño y curaduría arquitectónica premium de perfiles sociales.",
        "Mínimo sugerido de 3 meses para estabilizar algoritmos."
      ]
    },
    premium: {
      total: "$2,500",
      period: " USD Pago Único",
      details: [
        { name: "Licencias de Software de IA Avanzada", val: "$320.00" },
        { name: "Infraestructura de Redes & Pixels (web)", val: "$300.00" },
        { name: "Infraestructura Web, SSL & APIs de Pago", val: "$485.00" },
        { name: "Arquitectura de Canales & Activos Orgánicos", val: "$165.00" },
        { name: "Nube, Almacenamiento & Soporte", val: "$140.00" },
        { name: "Honorarios de Gestión (30%)", val: "$750.00" }
      ],
      highlights: [
        "Sincronización iCal en tiempo real (Airbnb, Booking, Web) anti-overbooking.",
        "IA Inmersiva 4K: Recorrido virtual procesado desde 54 fotos de referencia.",
        "Guía Digital Interactiva: Asset premium que blinda reseñas de 5 estrellas.",
        "Todo el Plan Básico incluido (pauta, gestión y US Proxy) por 2 meses de desarrollo."
      ]
    }
  };

  const current = budgetData[selectedPlan];

  return (
    <div className="flex flex-col bg-[#121211] text-stone-100 rounded-xl border border-stone-800 shadow-xl overflow-hidden p-6 md:p-8 my-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h3 className="font-serif text-2xl text-nobel-gold">Planes de Inversión Estratégica</h3>
          <p className="text-xs text-stone-400 mt-1">Transparencia absoluta en la distribución del presupuesto</p>
        </div>

        {/* Toggle buttons */}
        <div className="flex gap-2 bg-stone-900/50 p-1 rounded-lg border border-stone-800 self-stretch md:self-auto">
          <button
            onClick={() => setSelectedPlan('basic')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-all ${selectedPlan === 'basic' ? 'bg-nobel-gold text-stone-950 shadow' : 'text-stone-400 hover:text-stone-200'}`}
          >
            Plan Básico ($850/mo)
          </button>
          <button
            onClick={() => setSelectedPlan('premium')}
            className={`flex-1 md:flex-none px-4 py-2 text-xs font-bold rounded-md transition-all ${selectedPlan === 'premium' ? 'bg-nobel-gold text-stone-950 shadow' : 'text-stone-400 hover:text-stone-200'}`}
          >
            Plan Integral Premium ($2.5k)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Cost Breakdown Table */}
        <div className="lg:col-span-7 bg-stone-950/80 p-5 md:p-6 rounded-xl border border-stone-800/80 space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block border-b border-stone-900 pb-2">Distribución Presupuestaria Real</span>
          
          <div className="space-y-3.5">
            {current.details.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs border-b border-stone-900/60 pb-2.5">
                <span className="text-stone-300 font-sans">{item.name}</span>
                <span className="font-mono text-white font-medium">{item.val}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-800 flex justify-between items-center">
            <span className="font-serif text-lg text-white">Inversión Total</span>
            <div className="text-right">
              <span className="font-mono text-xl md:text-2xl text-nobel-gold font-bold">{current.total}</span>
              <span className="text-xs text-stone-400 font-sans">{current.period}</span>
            </div>
          </div>
          
          {selectedPlan === 'premium' && (
            <p className="text-[10px] text-stone-500 font-mono italic text-right mt-1">
              *A partir del mes 3 la tarifa disminuye automáticamente a $850/mes de gestión.
            </p>
          )}
        </div>

        {/* Highlights List */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-5 bg-gradient-to-b from-stone-900 to-stone-950 rounded-xl border border-stone-800">
            <h4 className="font-serif text-lg text-white mb-4">¿Qué incluye este plan?</h4>
            <ul className="space-y-4">
              {current.highlights.map((h, i) => (
                <li key={i} className="flex gap-2.5 items-start text-xs md:text-sm text-stone-300 leading-relaxed">
                  <span className="text-nobel-gold shrink-0 mt-0.5">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slide 10 Policy Highlight */}
          <div className="p-4 bg-stone-900/40 rounded-xl border border-stone-800 space-y-3">
            <div className="flex items-center gap-2 text-nobel-gold">
              <DollarSign size={16} />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Pauta Directa Sin Intermediarios</span>
            </div>
            <p className="text-stone-400 text-xs leading-relaxed">
              <strong>Transparencia total:</strong> Tu presupuesto de anuncios (Ads) se conecta directamente a tu propia tarjeta. Yo no recibo ningún valor adicional por pauta, eliminando conflictos de interés.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

