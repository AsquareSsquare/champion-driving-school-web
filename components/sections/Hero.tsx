import { GridBackground } from "@/components/ui/grid-background";
import { Award, CheckCircle, Clock4 } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import MaskedDiv from "@/components/ui/masked-div";
import CTAButton from "@/components/common/CTAButton";

function Hero() {
  return (
    <section id="home">
      <GridBackground>
        <div className="w-full h-screen max-w-7xl mx-auto z-20 flex items-center justify-between">
          <div className="w-full flex items-center justify-between flex-col xl:flex-row px-6 xl:px-0 gap-16 xl:gap-0">
            <div className="max-w-[600px] space-y-6">
              <Badge className="bg-accent cursor-pointer">
                <Award className="text-blue-500" />
                Trusted by 1000+ students
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Master the Road with{" "}
                <span className="text-blue-500">Confidence</span>
              </h1>
              <p className="text-xl">
                Professional driving lessons tailored to your pace. From
                first-time drivers to advanced skills - we&apos;ll get you
                road-ready safely and efficiently.
              </p>
              <div className="flex items-center gap-4">
                <CTAButton
                  btnText="Book your first lesson"
                  to="courses"
                  icon={true}
                />
                <CTAButton
                  btnText="Contact us"
                  to="contact"
                  icon={false}
                  variant="outline"
                />
              </div>
            </div>
            <div className="relative hidden sm:block">
              <MaskedDiv maskType="type-2">
                <Image
                  src="/images/hero_image.jpg"
                  alt="hero"
                  width={600}
                  height={600}
                  className="rounded-xl"
                />
              </MaskedDiv>
              <div className="p-4 rounded-xl bg-accent absolute -top-6.5 hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer">
                <p className="text-white">
                  <span className="font-bold text-green-500">99%</span> Pass
                  rate
                </p>
              </div>
              <div className="p-4 flex gap-4 items-center rounded-xl bg-gray-300 cursor-pointer group/card absolute -bottom-10.5 -left-5.5">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover/card:from-green-200 group-hover/card:to-emerald-200 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-600 group-hover/card:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 group-hover/card:text-green-600 transition-colors duration-300">
                    Licensed & Insured
                  </p>
                  <p className="text-sm text-slate-600">
                    Fully certified instructors
                  </p>
                </div>
              </div>
              <div className="p-4 flex gap-4 items-center rounded-xl bg-gray-100 cursor-pointer group/hour absolute -top-10 -right-1.5">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center group-hover/hour:from-blue-200 group-hover/hour:to-blue-400 transition-all duration-300">
                  <Clock4 className="w-6 h-6 text-blue-600 group-hover/hour:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 group-hover/hour:text-blue-600 transition-colors duration-300">
                    Flexible Hours
                  </p>
                  <p className="text-sm text-slate-600">7 Days a week</p>
                </div>
              </div>
            </div>
            <div className="flex sm:hidden items-start gap-3 flex-wrap">
              <div className="p-4 rounded-xl bg-accent hover:-translate-y-0.5 transition-transform duration-200 cursor-pointer">
                <p className="text-white">
                  <span className="font-bold text-green-500">99%</span> Pass
                  rate
                </p>
              </div>
              <div className="p-4 flex gap-4 items-center rounded-xl bg-accent cursor-pointer group/card">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover/card:from-green-200 group-hover/card:to-emerald-200 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-600 group-hover/card:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover/card:text-green-600 transition-colors duration-300">
                    Licensed & Insured
                  </p>
                  <p className="text-sm text-slate-200">
                    Fully certified instructors
                  </p>
                </div>
              </div>
              <div className="p-4 flex gap-4 items-center rounded-xl bg-accent cursor-pointer group/hour">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-300 rounded-full flex items-center justify-center group-hover/hour:from-blue-200 group-hover/hour:to-blue-400 transition-all duration-300">
                  <Clock4 className="w-6 h-6 text-blue-600 group-hover/hour:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-semibold text-white group-hover/hour:text-blue-600 transition-colors duration-300">
                    Flexible Hours
                  </p>
                  <p className="text-sm text-slate-200">7 Days a week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GridBackground>
    </section>
  );
}

export default Hero;
