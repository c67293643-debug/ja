import { Phone, Mail, User } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div className="h-32 bg-gradient-to-r from-amber-400 to-orange-500 relative">
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
              <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-white/20 flex items-center justify-center shadow-xl">
                <User className="w-12 h-12 text-amber-400" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-16 pb-8 px-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-1">
              Marek Homecki
            </h1>
            <p className="text-slate-400 text-sm mb-8">
              Skontaktuj się ze mną
            </p>

            {/* Phone */}
            <a
              href="tel:608332445"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-4 mb-4 group border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                <Phone className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left flex-1">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Telefon
                </p>
                <p className="text-xl font-semibold text-white">
                  608 332 445
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:homecki.marek@gmail.com"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-4 group border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                <Mail className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Email
                </p>
                <p className="text-lg font-semibold text-white truncate">
                  homecki.marek@gmail.com
                </p>
              </div>
            </a>
          </div>

          {/* Footer */}
          <div className="px-6 pb-6">
            <div className="h-px bg-white/10 mb-4" />
            <div className="flex gap-3">
              <a
                href="tel:608332445"
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold py-3 px-4 rounded-xl transition-all duration-300 text-center shadow-lg shadow-amber-500/25"
              >
                Zadzwoń
              </a>
              <a
                href="mailto:homecki.marek@gmail.com"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 text-center border border-white/20"
              >
                Napisz
              </a>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-slate-500 text-xs mt-6">
          Kliknij, aby skopiować lub przejść do aplikacji
        </p>
      </div>
    </div>
  );
}

export default App;
