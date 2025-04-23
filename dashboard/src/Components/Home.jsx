import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen max-w-screen-lg mx-auto bg-white antialiased">
            {/* Navigation - placeholder for actual nav component */}
            <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="text-xl font-semibold">Logo</div>
                    <div className="flex items-center gap-8">
                        <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Sign up for free
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="pt-32 pb-24">
                <div className="max-w-[1120px] mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-[44px] md:text-[56px] leading-[1.15] font-bold mb-12 tracking-[-0.02em]">
                            Amplify your brand exposure in
                        </h1>
                        <ul className="flex flex-col items-center space-y-4 mb-12 text-[22px] font-medium text-gray-800">
                            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">ChatGPT</li>
                            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Gemini</li>
                            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Perplexity</li>
                            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Deepseek</li>
                            <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">Claude</li>
                        </ul>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12">
                            Track your brand's exposure across major AI platforms
                        </p>
                        <Link to="/signup" 
                            className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                            Sign up for free
                        </Link>

                        {/* Dashboard Preview */}
                        <div className="mt-24 mb-20">
                            <div className="bg-white rounded-[28px] shadow-[0_8px_16px_rgb(0,0,0,0.08),0_0_4px_rgb(0,0,0,0.05)]">
                                <img 
                                    src="/dashboard-preview.png" 
                                    alt="Chatbeat dashboard interface" 
                                    className="w-full rounded-[24px]" 
                                />
                            </div>
                        </div>

                        {/* Brand Logos */}
                        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                            <img src="/logos/brand24.png" alt="BRAND24" className="h-5 opacity-60" />
                            <img src="/logos/survicate.png" alt="SURVICATE" className="h-5 opacity-60" />
                            <img src="/logos/samsung.png" alt="SAMSUNG" className="h-5 opacity-60" />
                            <img src="/logos/insights24.png" alt="Insights24" className="h-5 opacity-60" />
                            <img src="/logos/visux.png" alt="VISUX" className="h-5 opacity-60" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Sections */}
            <div className="py-24 bg-gray-50/50">
                <div className="max-w-[1120px] mx-auto px-6">
                    {/* Major AI Platforms */}
                    <section className="mb-40">
                        <div className="max-w-2xl">
                            <div className="text-sm font-semibold text-blue-600 mb-6 tracking-wider">PLATFORM</div>
                            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold mb-6">
                                Major AI platforms available
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Take control of how AI presents your brand in major AI chatbots
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-[28px] p-8 shadow-[0_8px_16px_rgb(0,0,0,0.08),0_0_4px_rgb(0,0,0,0.05)]">
                                <h3 className="text-2xl font-bold mb-8">
                                    Driving more traffic and expanding your audience reach.
                                </h3>
                                <img src="/platform-preview.png" alt="Analytics Dashboard" className="rounded-2xl w-full" />
                            </div>
                            <div className="flex items-center">
                                <img src="/features-preview.png" alt="Features" className="rounded-[28px] w-full shadow-[0_8px_16px_rgb(0,0,0,0.08),0_0_4px_rgb(0,0,0,0.05)]" />
                            </div>
                        </div>
                    </section>

                    {/* Track & Insights */}
                    <section className="mb-40">
                        <div className="max-w-2xl mb-16">
                            <div className="text-sm font-semibold text-blue-600 mb-6 tracking-wider">FEATURES</div>
                            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold">
                                Track your brand, gain insights
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-12">
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Analytics to monitor mentions</h3>
                                    <p className="text-lg text-gray-600">Identify and address discrepancies</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Verify the accuracy of information</h3>
                                    <p className="text-lg text-gray-600">Monitor your brand's strategy</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Assess sentiment</h3>
                                    <p className="text-lg text-gray-600">Strengthen the feedback loop</p>
                                </div>
                            </div>
                            <div>
                                <img src="/chat-interface.png" alt="Chat Interface" className="rounded-[28px] shadow-[0_8px_16px_rgb(0,0,0,0.08),0_0_4px_rgb(0,0,0,0.05)]" />
                            </div>
                        </div>
                    </section>

                    {/* Features Grid */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                        {['Competitor Benchmarking', 'Optimize Your Brand in AI Search', 'Generative AI Optimization'].map((title, index) => (
                            <div key={index} className="bg-white rounded-[28px] p-8 shadow-[0_8px_16px_rgb(0,0,0,0.08),0_0_4px_rgb(0,0,0,0.05)]">
                                <div className="text-sm font-semibold text-blue-600 mb-6 tracking-wider">FEATURES</div>
                                <h3 className="text-2xl font-bold mb-6">{title}</h3>
                                <ul className="space-y-4 text-lg text-gray-600">
                                    <li>Monitor your brand's average ranking</li>
                                    <li>Identify improvement opportunities</li>
                                    <li>Strengthen the brand's AI position</li>
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* AI Platforms */}
                    <section className="mb-40">
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="text-[32px] md:text-[40px] leading-tight font-bold mb-6">
                                Tracking brands across top AI chatbots
                            </h2>
                            <p className="text-xl text-gray-600">
                                We monitor your brand's visibility in AI-driven platforms.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {['ChatGPT', 'DeepSeek', 'Gemini', 'Claude', 'Perplexity', 'Llama'].map((platform) => (
                                <div key={platform} className="bg-white rounded-2xl p-6 shadow-[0_8px_16px_rgb(0,0,0,0.08)] hover:shadow-[0_12px_24px_rgb(0,0,0,0.12)] transition-shadow duration-200">
                                    <img src={`/ai-logos/${platform.toLowerCase()}.png`} alt={platform} className="h-12 mx-auto mb-4" />
                                    <p className="text-gray-600 font-medium text-center">{platform}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Final CTA */}
                    <section className="bg-gradient-to-b from-blue-50 to-white rounded-[28px] px-8 py-16 text-center">
                        <div className="mb-10">
                            <div className="flex justify-center mb-6">
                                <div className="flex -space-x-3">
                                    {[1,2,3,4,5].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-white shadow-md border-2 border-white ring-2 ring-gray-50"></div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm font-bold text-gray-500 tracking-wider">TRUSTED BY OVER 10K USERS WORLDWIDE</p>
                        </div>
                        <h2 className="text-[32px] md:text-[40px] leading-tight font-bold mb-10">
                            Track your brand's exposure<br />across major AI platforms
                        </h2>
                        <Link to="/signup" 
                            className="inline-flex items-center justify-center h-12 px-8 font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                            Sign up for free
                        </Link>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
