import React from "react";
import { motion } from "framer-motion";
import ashirvadLogo from "../imgs/ashirvad.png";
import bigbasket from "../imgs/bigbasket.png";
import blueStart from "../imgs/BlueStarLimited.png";
import capillary from "../imgs/capillary-technologies_1639723040758.webp";
import novoNordisk from "../imgs/company-novo-nordisk.png";
import dexian from "../imgs/DEXIAN_LOGOMARK_IT-SOLUTIONS.webp";
import ernstYoung from "../imgs/Ernst_Young_(5).png";
import esseiGroup from "../imgs/Essel Group-01.png";
import greenply from "../imgs/GREENPLY.NS_.png";
import hypolicy from "../imgs/hrpolicy.jpg";
import labVantage from "../imgs/LabVantage_Logo-2X.png";
import logoJpg from "../imgs/logo.jpg";
import logoPng from "../imgs/logo.png";
import manipal from "../imgs/manipal-instit-manipal.png";
import mediaNet from "../imgs/Media.net Logo.png";
import micromatic from "../imgs/micromatic.png";
import olaElectric from "../imgs/ola electric mobility.png";
import posh from "../imgs/POSH.jpg";
import sittCable from "../imgs/siti cable.png";
import vivantaTaj from "../imgs/vivanta taj logo.png";
import vivantaByTaj from "../imgs/vivanta-by-taj.png";

export default function Clientele() {
  const clients = [
    {
      name: "Ashirvad",
      logo: ashirvadLogo,
    },
    {
      name: "BigBasket",
      logo: bigbasket,
    },
    {
      name: "BlueStar Limited",
      logo: blueStart,
    },
    {
      name: "Capillary Technologies",
      logo: capillary,
    },
    {
      name: "Novo Nordisk",
      logo: novoNordisk,
    },
    {
      name: "Dexian",
      logo: dexian,
    },
    {
      name: "Ernst & Young",
      logo: ernstYoung,
    },
    {
      name: "Essel Group",
      logo: esseiGroup,
    },
    {
      name: "Greenply",
      logo: greenply,
    },
    {
      name: "HR Policy",
      logo: hypolicy,
    },
    {
      name: "LabVantage",
      logo: labVantage,
    },
    {
      name: "Manipal Institute",
      logo: manipal,
    },
    {
      name: "Media.net",
      logo: mediaNet,
    },
    {
      name: "Micromatic",
      logo: micromatic,
    },
    {
      name: "Ola Electric",
      logo: olaElectric,
    },
    {
      name: "POSH",
      logo: posh,
    },
    {
      name: "SITI Cable",
      logo: sittCable,
    },
    {
      name: "Vivanta Taj",
      logo: vivantaTaj,
    },
    {
      name: "Vivanta By Taj",
      logo: vivantaByTaj,
    },
  ];

  // Duplicate the clients for seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-24 section-gradient-1 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-6 gradient-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Empowering global enterprises with intelligent compliance solutions
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex items-center py-8 animate-scroll">
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 px-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-40 h-20 flex items-center justify-center">
                  {" "}
                  {/* Fixed size container */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain" /* This will maintain aspect ratio */
                    style={{
                      height: "auto",
                      width: "auto",
                      maxHeight: "80px" /* Adjust as needed */,
                      maxWidth: "160px" /* Adjust as needed */,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 130s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
