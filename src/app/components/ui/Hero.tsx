import Image from "next/image";
import Button from "../base/Button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
          <div className="w-64 h-64 rounded-full ring-4 ring-primary-500 ring-offset-4 ring-offset-white dark:ring-offset-gray-900 mx-auto overflow-hidden relative">
              <Image
                src="/avatar.jpeg"
                alt="Developer Avatar"
                fill
                className="object-cover"
                priority
                sizes="100%"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold m-6">Full Stack Developer</h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Passionate about creating innovative web solutions that solve real-world problems. Specialized in modern
              JavaScript frameworks and cloud technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-slate-900 hover:bg-slate-800" href="/cv.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
} 