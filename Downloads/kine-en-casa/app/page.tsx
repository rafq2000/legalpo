"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  Users,
  Home,
  Stethoscope,
  Brain,
  Dumbbell,
  GraduationCap,
  UserCheck,
  Star,
  Shield,
  Award,
  Check,
  Sparkles,
  Crown,
  Zap,
  MessageCircle,
  Smartphone,
  Activity,
  Package,
  TrendingUp,
  Database,
  BookOpen,
} from "lucide-react"

import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  const services = [
    {
      title: "Kinesiología Geriátrica",
      description: "Mejoramos la movilidad y prevenimos caídas en adultos mayores",
      icon: Users,
      image: "/elderly-physio-home.png",
      features: [
        "Prevención de caídas",
        "Rehabilitación post hospitalización",
        "Mejora de movilidad",
        "Fortalecimiento muscular",
      ],
    },
    {
      title: "Kinesiología Respiratoria",
      description: "Tratamiento especializado para problemas respiratorios",
      icon: Stethoscope,
      image: "/respiratory-therapy-baby.png",
      features: ["Recuperación post COVID", "Tratamiento EPOC", "Rehabilitación neumonía", "Técnicas de respiración"],
    },
    {
      title: "Kinesiología Traumatológica",
      description: "Rehabilitación de lesiones y fracturas en casa",
      icon: Dumbbell,
      image: "/knee-rehabilitation.png",
      features: [
        "Recuperación de fracturas",
        "Rehabilitación esguinces",
        "Post prótesis rodilla/cadera",
        "Ejercicios guiados",
      ],
    },
    {
      title: "Rehabilitación Postquirúrgica",
      description: "Recuperación especializada después de cirugías",
      icon: Heart,
      image: "/home-rehab-guidance.png",
      features: [
        "Post cirugías ortopédicas",
        "Rehabilitación abdominal",
        "Recuperación cardíaca",
        "Seguimiento personalizado",
      ],
    },
    {
      title: "Kinesiología Neurológica",
      description: "Tratamiento para condiciones neurológicas",
      icon: Brain,
      image: "/neurological-physiotherapy.png",
      features: ["Rehabilitación ACV", "Tratamiento Parkinson", "Terapia Alzheimer", "Esclerosis múltiple"],
    },
    {
      title: "Educación Familiar",
      description: "Capacitamos a familiares y cuidadores",
      icon: GraduationCap,
      image: "/physiotherapy-elderly-care.png",
      features: ["Entrenamiento cuidadores", "Ejercicios simples", "Técnicas de movilización", "Cuidados preventivos"],
    },
  ]

  const plans = [
    {
      name: "Plan Essential",
      description: "La base para una recuperación constante y accesible",
      icon: Heart,
      features: [
        "4 sesiones de kinesiología al mes",
        "Asistente AI 24/7 vía WhatsApp",
        "Biblioteca de ejercicios personalizada",
        "Seguimiento de evolución básico",
        "Atención a domicilio garantizada",
      ],
      popular: false,
      gradient: "from-emerald-600 to-emerald-800",
      price: "160.000",
    },
    {
      name: "Plan Premium",
      description: "El equilibrio perfecto para una rehabilitación acelerada",
      icon: Star,
      features: [
        "8 sesiones de kinesiología al mes",
        "Evaluación mensual con tecnología",
        "Teleconsulta Express de seguimiento",
        "Todo lo del Plan Essential",
        "Reportes de progreso detallados",
        "Prioridad en agendamiento",
      ],
      popular: true,
      gradient: "from-amber-600 to-amber-800",
      price: "280.000",
    },
    {
      name: "Plan Elite",
      description: "La experiencia definitiva de salud y bienestar",
      icon: Crown,
      features: [
        "Sesiones ILIMITADAS*",
        "Kinesiólogo dedicado asignado",
        "Kit Premium a domicilio incluido",
        "Prioridad absoluta en agenda",
        "Gamificación y premios",
        "Red de especialistas preferente",
        "Todo incluido, sin límites",
      ],
      popular: false,
      gradient: "from-slate-700 to-slate-900",
      price: "Consultar",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <WhatsAppButton />

      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl sticky top-0 z-50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-amber-600 p-2 rounded-xl shadow-lg">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold font-serif text-white tracking-widest">KINEUM</h1>
                <p className="text-xs text-slate-300 uppercase tracking-widest">Clinical Home Care</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#servicios" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Especialidades
              </a>
              <a href="#planes" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Membresías
              </a>
              <a href="#nosotros" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Expertise
              </a>
              <a href="#contacto" className="hover:text-amber-400 transition-colors font-medium text-slate-200">
                Contacto
              </a>
            </nav>
            <Button
              variant="secondary"
              className="font-semibold shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-slate-900 hover:bg-slate-100 border border-slate-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              Agendar Evaluación
            </Button>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                <Sparkles className="h-4 w-4 mr-2 text-amber-400" />
                The Future of Recovery
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 font-serif leading-tight">
                Rehabilitación <span className="text-amber-700">Clínica</span>
                <br />
                <span className="text-4xl md:text-5xl text-slate-600">en su Espacio Personal</span>
              </h2>
            </div>

            <p className="text-xl md:text-2xl text-slate-700 mb-12 leading-relaxed max-w-4xl mx-auto">
              <strong>KINEUM</strong> redefine la kinesiología domiciliaria.
              Fusionamos la excelencia clínica con <strong>tecnología de monitoreo avanzada</strong> para acelerar su recuperación con precisión y confort.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button
                size="lg"
                className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500"
                onClick={() => window.open("https://wa.me/56999679593", "_blank")}
              >
                <MessageCircle className="h-5 w-5 mr-3" />
                WhatsApp +56 9 9967 9593
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-6 bg-white hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-slate-300 text-slate-900"
              >
                Ver Todos los Servicios
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Cobertura Santiago</h3>
                <p className="text-slate-600 font-medium">La Florida, Zona Central y Sector Oriente</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Horarios Flexibles</h3>
                <p className="text-slate-600 font-medium">Lunes a Domingo • 8:00 - 20:00</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Profesionales Certificados</h3>
                <p className="text-slate-600 font-medium">+5 años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <Stethoscope className="h-4 w-4 mr-2" />
              Servicios Especializados
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Tratamientos Profesionales
              <br />
              <span className="text-amber-700">a Domicilio</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios de kinesiología a domicilio, adaptados a las necesidades
              específicas de cada paciente con equipamiento profesional y técnicas avanzadas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border border-slate-200 shadow-lg bg-white hover:-translate-y-2"
              >
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-900 text-white shadow-lg border-slate-800">
                      <service.icon className="h-4 w-4 mr-2" />
                      Especializado
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      <service.icon className="h-6 w-6 text-slate-700" />
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-slate-900 font-serif group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="h-2 w-2 bg-slate-700 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 border border-emerald-500"
                    onClick={() => window.open("https://wa.me/56999679593", "_blank")}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Ecosystem Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-700 text-white border-none shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              Nuevo: Kine Privé
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Más que Kinesiología:
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
                Un Ecosistema de Salud
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Hemos revolucionado la rehabilitación domiciliaria integrando tecnología avanzada,
              inteligencia artificial y equipamiento premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-900/20">
                <Brain className="h-8 w-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Asistente AI 24/7</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Chat inteligente especializado que responde tus dudas, guía tus ejercicios y monitorea
                tu dolor entre sesiones. Nunca estarás solo.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-amber-900/20">
                <Smartphone className="h-8 w-8 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Portal del Paciente</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Tu historial clínico, gráficos de evolución, fotos de rango de movimiento y
                playlist de ejercicios en una app exclusiva.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                <Package className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Kit Premium</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Llevamos el gimnasio a tu casa: camilla pro, TENS, ultrasonido, y te dejamos
                un kit de bandas y elementos para tu recuperación.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-2 group">
              <div className="bg-slate-900 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-900/20">
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Gamificación</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Gana puntos por completar tus ejercicios, mantén tu racha diaria y desbloquea
                descuentos y premios por tu compromiso.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="planes"
        className="py-24 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <Zap className="h-4 w-4 mr-2" />
              Planes de Tratamiento
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
              Elige el Plan Perfecto
              <br />
              <span className="text-amber-700">para tu Recuperación</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Ofrecemos planes flexibles adaptados a tus necesidades específicas de rehabilitación.
              <span className="text-slate-900 font-semibold"> Primera evaluación gratuita</span> para todos nuestros
              planes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative group hover:shadow-2xl transition-all duration-500 border border-slate-300 shadow-lg bg-white hover:-translate-y-3 ${plan.popular ? "ring-2 ring-amber-500 scale-105" : ""
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2 shadow-lg border border-amber-500">
                      <Crown className="h-4 w-4 mr-2" />
                      Más Popular
                    </Badge>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${plan.gradient} rounded-t-xl`}></div>

                <CardHeader className="text-center pb-4 pt-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} p-0.5`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <plan.icon className="h-8 w-8 text-slate-700" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-slate-900 font-serif mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-slate-900">${plan.price}</span>
                    {plan.price !== "Consultar" && <span className="text-slate-500 font-medium">/mes</span>}
                  </div>
                  <CardDescription className="text-slate-600 text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <div className="bg-emerald-100 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="font-medium leading-relaxed text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full text-lg py-6 font-semibold transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500"
                    onClick={() =>
                      window.open(
                        `https://wa.me/56999679593?text=Hola, me interesa el ${plan.name}. ¿Podrían darme más información?`,
                        "_blank",
                      )
                    }
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Consultar {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif">¿Necesitas un Plan Personalizado?</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Creamos planes específicos para condiciones complejas, tratamientos de larga duración o necesidades
                especiales. Contáctanos para una evaluación personalizada sin costo.
              </p>
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white transition-all duration-300 border border-emerald-500"
                onClick={() =>
                  window.open(
                    "https://wa.me/56999679593?text=Hola, necesito información sobre un plan personalizado de kinesiología",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Consulta Personalizada
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="nosotros" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
                <Shield className="h-4 w-4 mr-2" />
                Confianza y Experiencia
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif leading-tight">
                ¿Por qué elegir
                <br />
                <span className="text-amber-700">KineEnCasa?</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Somos un equipo de kinesiólogos profesionales especializados en atención domiciliaria. Entendemos que la
                comodidad del hogar es fundamental para una recuperación exitosa y personalizada.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <Award className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Profesionales Certificados</h3>
                    <p className="text-slate-600">
                      Kinesiólogos titulados con más de 5 años de experiencia en atención domiciliaria especializada
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <Heart className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Atención Personalizada</h3>
                    <p className="text-slate-600">
                      Planes de tratamiento únicos adaptados a cada paciente y su entorno familiar
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-slate-50 rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <Stethoscope className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">Equipamiento Profesional</h3>
                    <p className="text-slate-600">
                      Llevamos todo el equipamiento médico y terapéutico necesario directamente a tu hogar
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-amber-200 rounded-2xl blur-2xl opacity-30"></div>
              <img
                src="/physiotherapist-elderly-exercise.png"
                alt="Kinesiólogo profesional atendiendo paciente en casa"
                className="relative rounded-2xl shadow-2xl w-full hover:shadow-3xl transition-shadow duration-500 border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contacto"
        className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-600/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-8 px-6 py-2 text-sm font-medium bg-amber-600 text-white border-amber-500">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contacto Inmediato
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-serif leading-tight">
            ¿Listo para comenzar tu
            <br />
            <span className="text-amber-400">rehabilitación?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Contáctanos hoy mismo y agenda tu primera sesión de kinesiología a domicilio.
            <span className="font-semibold text-amber-400">Evaluación inicial gratuita</span> para nuevos pacientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 py-6 bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-slate-300"
              onClick={() => window.open("tel:+56999679593")}
            >
              <Phone className="h-5 w-5 mr-3" />
              +56 9 9967 9593
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold border border-emerald-500"
              onClick={() => window.open("https://wa.me/56999679593", "_blank")}
            >
              <MessageCircle className="h-5 w-5 mr-3" />
              Enviar WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <MapPin className="h-10 w-10 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold text-xl mb-3">Cobertura Completa</h3>
              <p className="text-slate-300 leading-relaxed">
                La Florida, Las Condes, Providencia, Ñuñoa, Santiago Centro, Vitacura, Lo Barnechea, Peñalolén, Macul,
                San Joaquín
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <Clock className="h-10 w-10 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold text-xl mb-3">Horarios Flexibles</h3>
              <p className="text-slate-300 leading-relaxed">
                Lunes a Domingo
                <br />
                <span className="font-semibold">8:00 - 20:00 hrs</span>
                <br />
                Emergencias 24/7
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700">
              <MessageCircle className="h-10 w-10 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold text-xl mb-3">Respuesta Rápida</h3>
              <p className="text-slate-300 leading-relaxed">
                Respuesta inmediata por WhatsApp
                <br />
                <span className="font-semibold">Agenda flexible</span>
                <br />
                Primera consulta gratis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comunas Section - Internal Links for SEO */}
      <section id="comunas" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              <MapPin className="h-4 w-4 mr-2" />
              Cobertura Sector Oriente
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Kinesiología a Domicilio en
              <br />
              <span className="text-amber-700">Todo el Sector Oriente de Santiago</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Atendemos a domicilio en todas las comunas del sector oriente. Haz clic en tu comuna para más información.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <a href="/kinesiologo-a-domicilio-las-condes" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Las Condes</h3>
              <p className="text-sm text-slate-500 mt-1">Ver más →</p>
            </a>
            <a href="/kinesiologo-a-domicilio-vitacura" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Vitacura</h3>
              <p className="text-sm text-slate-500 mt-1">Ver más →</p>
            </a>
            <a href="/kinesiologo-a-domicilio-providencia" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Providencia</h3>
              <p className="text-sm text-slate-500 mt-1">Ver más →</p>
            </a>
            <a href="/kinesiologo-a-domicilio-nunoa" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Ñuñoa</h3>
              <p className="text-sm text-slate-500 mt-1">Ver más →</p>
            </a>
            <a href="/kinesiologo-a-domicilio-la-reina" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">La Reina</h3>
              <p className="text-sm text-slate-500 mt-1">Ver más →</p>
            </a>
            <a href="/kinesiologo-a-domicilio-lo-barnechea" className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1 text-center">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-amber-600 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-slate-900 group-hover:text-amber-700 transition-colors">Lo Barnechea</h3>
              <p className="text-sm text-slate-500 mt-1">Ver más →</p>
            </a>
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-4">
              También atendemos en: <strong>La Florida, Peñalolén, Macul, San Joaquín y Santiago Centro</strong>
            </p>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
              onClick={() => window.open("https://wa.me/56999679593?text=Hola, ¿atienden kinesiología a domicilio en mi comuna?", "_blank")}
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Consultar Cobertura
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section - New for Kineum */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-100 text-slate-800 border-slate-200">
              <BookOpen className="h-4 w-4 mr-2" />
              Journal Clínico
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Ciencia y <span className="text-amber-700">Bienestar</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Insights médicos, guías de recuperación y novedades sobre tecnología aplicada a la salud.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Link href="/blog/neuroplasticidad-recuperacion-acv" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Recovery Science"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">
                    Rehabilitación
                  </Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                Neuroplasticidad: Acelerando la recuperación post-ACV
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Cómo la tecnología y los ejercicios cognitivos específicos pueden potenciar la capacidad del cerebro para sanar.
              </p>
              <span className="text-sm font-semibold text-emerald-600 flex items-center">
                Leer artículo <TrendingUp className="h-3 w-3 ml-2" />
              </span>
            </Link>

            <Link href="/blog/ergonomia-home-office-guia-2024" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Ergonomics"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">
                    Prevención
                  </Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                Ergonomía Home Office: Guía definitiva 2024
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Protocolos clínicos para prevenir el dolor lumbar y cervical en jornadas de trabajo extensas.
              </p>
              <span className="text-sm font-semibold text-emerald-600 flex items-center">
                Leer artículo <TrendingUp className="h-3 w-3 ml-2" />
              </span>
            </Link>

            <Link href="/blog/sarcopenia-fuerza-es-salud" className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-slate-100">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Elderly Care"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 backdrop-blur-sm shadow-sm">
                    Geriatría
                  </Badge>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-700 transition-colors font-serif">
                Sarcopenia: Por qué la fuerza es salud
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                Estrategias nutricionales y kinésicas para mantener la vitalidad muscular en la tercera edad.
              </p>
              <span className="text-sm font-semibold text-emerald-600 flex items-center">
                Leer artículo <TrendingUp className="h-3 w-3 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO Rich Snippets */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium bg-slate-900 text-white border-slate-800">
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif">
              Todo sobre Kinesiología
              <br />
              <span className="text-amber-700">a Domicilio en Santiago</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">¿Cuánto cuesta una sesión de kinesiología a domicilio en Santiago?</h3>
              <p className="text-slate-600">El precio de una sesión de kinesiología a domicilio en el sector oriente de Santiago varía según el tipo de tratamiento y la comuna. Ofrecemos evaluación inicial gratuita. Contáctanos al +56 9 9967 9593 para una cotización personalizada.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">¿Qué comunas atienden en el sector oriente de Santiago?</h3>
              <p className="text-slate-600">Atendemos Las Condes, Vitacura, Providencia, Ñuñoa, La Reina, Lo Barnechea, Peñalolén, La Florida, Macul y Santiago Centro. Todos los tratamientos se realizan directamente en tu hogar.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">¿Trabajan con Fonasa o Isapre?</h3>
              <p className="text-slate-600">Emitimos boletas que pueden ser reembolsadas por tu Isapre. También aceptamos pacientes Fonasa con modalidad libre elección. Consulta los detalles de tu plan de salud.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">¿Qué tipos de kinesiología ofrecen a domicilio?</h3>
              <p className="text-slate-600">Ofrecemos kinesiología geriátrica, respiratoria, traumatológica, neurológica, rehabilitación postquirúrgica y educación familiar. Nuestros kinesiólogos tienen más de 5 años de experiencia.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">¿Cuánto dura una sesión de kinesiología a domicilio?</h3>
              <p className="text-slate-600">Cada sesión tiene una duración de 60 minutos aproximadamente. El tiempo puede variar según las necesidades específicas del paciente y el tipo de tratamiento.</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">¿Atienden adultos mayores con movilidad reducida?</h3>
              <p className="text-slate-600">Sí, somos especialistas en atención a adultos mayores con movilidad reducida. Llevamos todo el equipamiento necesario a tu hogar y adaptamos cada sesión a las capacidades del paciente.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                  <Activity className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-serif tracking-widest">KINEUM</h3>
                  <p className="text-xs text-slate-500 uppercase">Clinical Home Care</p>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Redefiniendo el estándar de la rehabilitación domiciliaria en Chile mediante la integración de expertos clínicos y tecnología de vanguardia.
              </p>
              <div className="flex space-x-3">
                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-amber-900/50 transition-colors">
                  <Star className="h-4 w-4 text-amber-500" />
                </div>
                <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 hover:border-emerald-900/50 transition-colors">
                  <Shield className="h-4 w-4 text-emerald-500" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Especialidades</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Neurorrehabilitación</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Kinesiología Respiratoria</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Traumatología Avanzada</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Geriatría Activa</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Training Cognitivo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Paciente</h4>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Portal de Pacientes</li>
                <a href="/ejercicios" className="hover:text-amber-400 transition-colors cursor-pointer block">Biblioteca de Ejercicios</a>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Journal Clínico</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Preguntas Frecuentes</li>
                <li className="hover:text-amber-400 transition-colors cursor-pointer">Convenios Isapre</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">+56 9 9967 9593</span>
                    <span className="text-xs">Línea Exclusiva Pacientes</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">Santiago, Chile</span>
                    <span className="text-xs">Sector Oriente & Zona Central</span>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">Chat AI 24/7</span>
                    <span className="text-xs">Soporte Continuo</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-900 mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-600">
              © 2024 KINEUM Clinical Home Care. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-xs text-slate-600">
              <span className="hover:text-slate-400 cursor-pointer">Privacidad</span>
              <span className="hover:text-slate-400 cursor-pointer">Términos</span>
              <span className="hover:text-slate-400 cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
