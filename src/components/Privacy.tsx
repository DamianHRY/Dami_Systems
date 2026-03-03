import { ArrowLeft, Shield, Lock, Eye, Database, Share2, Clock, Cookie, RefreshCw, Mail } from 'lucide-react';

interface PrivacyProps {
    onBack: () => void;
}

export default function Privacy({ onBack }: PrivacyProps) {
    return (
        <div className="min-h-screen bg-gray-900 text-gray-300 pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Terug naar Home</span>
                </button>

                <header className="mb-16">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Privacy <span className="text-cyan-400">Beleid</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl">
                        Dami Systems hecht groot belang aan de bescherming van persoonsgegevens en uw privacy.
                    </p>
                </header>

                <div className="grid gap-8">
                    {/* Section 1 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Shield className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">1. Inleiding</h2>
                                <p className="leading-relaxed">
                                    Dami Systems hecht groot belang aan de bescherming van persoonsgegevens. Dit privacybeleid legt uit welke gegevens wij verzamelen via onze AI-chatbot diensten op Facebook Messenger, Instagram en WhatsApp.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Database className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">2. Welke gegevens verzamelen wij?</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Naam</li>
                                    <li>E-mailadres</li>
                                    <li>Telefoonnummer</li>
                                    <li>Afspraakgegevens (datum, tijd, type)</li>
                                    <li>Berichtinhoud via de chatbot</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Eye className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">3. Waarvoor gebruiken wij uw gegevens?</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Plannen, wijzigen of annuleren van afspraken</li>
                                    <li>Versturen van bevestigingen</li>
                                    <li>Beantwoorden van vragen</li>
                                    <li>Verbeteren van onze dienstverlening</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Share2 className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">4. Delen van gegevens</h2>
                                <p className="leading-relaxed">
                                    Wij delen gegevens alleen met onze partners waar dit noodzakelijk is voor onze dienstverlening:
                                    <span className="text-cyan-400"> Calendly</span> (afsprakenbeheer),
                                    <span className="text-cyan-400"> Airtable</span> (opslag), en
                                    <span className="text-cyan-400"> Meta</span> (platform). Wij verkopen nooit gegevens aan derden.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Lock className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">5. Beveiliging</h2>
                                <p className="leading-relaxed">
                                    Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik of ongeoorloofde toegang.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">6. Bewaartermijn</h2>
                                <p className="leading-relaxed">
                                    Gegevens worden niet langer bewaard dan strikt noodzakelijk is voor het doel waarvoor ze zijn verzameld en om te voldoen aan wettelijke verplichtingen.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <RefreshCw className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">7. Uw rechten</h2>
                                <p className="leading-relaxed">
                                    U heeft het recht op inzage, correctie, verwijdering, en bezwaar tegen de verwerking van uw gegevens. Neem contact met ons op via de onderstaande gegevens om uw rechten uit te oefenen.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <Cookie className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies</h2>
                                <p className="leading-relaxed">
                                    De chatbot maakt geen gebruik van cookies voor het volgen van gebruikersactiviteiten.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                                <RefreshCw className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white mb-4">9. Wijzigingen</h2>
                                <p className="leading-relaxed">
                                    Wij behouden ons het recht voor om dit privacybeleid op elk moment te wijzigen. De laatste versie zal altijd op deze pagina beschikbaar zijn.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/20 p-10 rounded-3xl group">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">10. Contact</h2>
                                <div className="space-y-3">
                                    <p className="text-xl font-medium text-cyan-400">Dami Systems</p>
                                    <p className="flex items-center gap-2">
                                        <span className="text-gray-400">Website:</span>
                                        <a href="https://www.damisystems.net" className="hover:text-white transition-colors underline decoration-cyan-500/30">www.damisystems.net</a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <a href="mailto:info@damisystems.net" className="hover:text-white transition-colors">info@damisystems.net</a>
                                    </p>
                                </div>
                            </div>
                            <div className="text-center md:text-right">
                                <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">Laatst bijgewerkt</p>
                                <p className="text-2xl font-bold text-white">Maart 2026</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
