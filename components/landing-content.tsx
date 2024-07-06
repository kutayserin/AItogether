"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials =[
  
    {
        name: "Daniel S.",
        avatar: "D",
        title: "Software Engineer",
        description: "This is the best application I've ever used!"
    },
    {
        name: "Marc E.",
        avatar: "M",
        title: "DJ & Event Manager",
        description: "It has elevated my brand's presence. Truly a game-changer."
    },
    {
        name: "Adrian L.",
        avatar: "A",
        title: "Finance Manager",
        description: "The app's insights have optimized our financial strategies, ensuring greater efficiency and more informed decision-making."
    },
    {
        name: "Dorothea R.",
        avatar: "Student",
        title: "Software Engineer",
        description: "I've been experimenting for days. While I don't own a brand, the AI capabilities are intriguing."
    },
    
]

export const LandingContent = () =>{
    return(
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
            Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {testimonials.map((item) =>(
                <Card key={item.description} className="bg-[#192339] border-none
                text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-x-2">
                            <div>
                                <p className="text-lg">{item.name}</p>
                                <p className="text-zinc-400 text-sm">{item.title}</p>
                            </div>
                        </CardTitle>
                        <CardContent className="pt-4 px-0">
                            {item.description}
                        </CardContent>
                    </CardHeader>

                </Card>
            ))}
        </div>
    </div>

    )
}