import React from "react";
import { FaUserGraduate, FaInfinity, FaAward, FaTags, FaProjectDiagram } from "react-icons/fa";

const features = [
    {
        title: "Learn From Experts",
        description:
            "All our courses are taught by experienced industry professionals who share real-world knowledge and career guidance.",
        icon: FaUserGraduate,
        color: "blue",
    },
    {
        title: "Certificate After Completion",
        description:
            "Receive a verified certificate after completing the course. Perfect for resumes and LinkedIn profiles.",
        icon: FaInfinity,
        color: "orange",
    },
    {
        title: "Lifetime Access",
        description:
            "Get lifetime access to course content with free updates so you can learn anytime, anywhere.",
        icon: FaAward,
        color: "green",
    },
    {
        title: "Affordable Pricing",
        description:
            "Student-friendly pricing that delivers high-quality education without compromising content.",
        icon: FaTags,
        color: "pink",
    },
    {
        title: "Hands-On Projects",
        description:
            "Build real-world projects to strengthen your portfolio and become job-ready.",
        icon: FaProjectDiagram,
        color: "yellow",
    },
];

const colorMap = {
    blue: "bg-blue-50 border-blue-500 text-blue-600",
    orange: "bg-orange-50 border-orange-500 text-orange-600",
    green: "bg-green-50 border-green-500 text-green-600",
    pink: "bg-pink-50 border-pink-500 text-pink-600",
    yellow: "bg-yellow-50 border-yellow-500 text-yellow-600",
};

const WhyChooseUs = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Why Choose Us
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        Our commitment goes beyond teaching. We focus on real learning,<br />
                        career growth, and long-term success.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-200 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-20">
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`flex flex-col w-full  md:flex-row items-center  ${isLeft ? "md:justify-start" : "md:justify-end"
                                        }`}
                                >
                                    {/* Content */}
                                    <div
                                        className={`w-full  md:w-[45%] p-6 rounded-2xl bg-white shadow-lg
                    transition-all duration-300 hover:-translate-y-2 ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                                            }`}
                                    >
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                                        <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                            <Icon size={26} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
