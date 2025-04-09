
import React, { useState } from 'react';
import { Heart, Image, Music, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const SweetApology: React.FC = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [currentSection, setCurrentSection] = useState<'message' | 'photos' | 'poems' | 'songs'>('message');
  
  // You can replace these with your actual content
  const photos = [
    { url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb", caption: "Starry night reminds me of your eyes" },
    { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22", caption: "Every sunset makes me think of you" },
    { url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", caption: "Our favorite place" },
  ];
  
  const poems = [
    { 
      title: "Forever Sorry", 
      content: "In silence my heart speaks,\nWords that lips fail to say.\nFor hurting you, my soul weeps,\nHoping forgiveness finds its way."
    },
    { 
      title: "A New Beginning", 
      content: "Through tearful nights and remorseful days,\nI've come to understand my ways.\nWith each sunrise comes a chance anew,\nTo show how deeply I care for you."
    },
  ];
  
  const songs = [
    { 
      title: "Whispers of Apology", 
      lyrics: "When shadows fall and light grows dim,\nI reach for memories where we begin.\nThrough all my faults and all my flaws,\nMy love for you has never paused."
    },
    { 
      title: "Healing Hearts", 
      lyrics: "Let these words mend what I broke,\nRevive the trust that sorrow stole.\nWith every note and every line,\nI pray your heart rejoins with mine."
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDE1D3] to-[#E5DEFF] p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-4xl w-full"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
          className="flex justify-center mb-6"
        >
          <Heart color="#FF6B6B" size={64} fill="#FFD93D" fillOpacity={0.3} />
        </motion.div>

        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4 font-serif">
          I'm Sorry
        </h1>

        <div className="flex justify-center space-x-4 my-6">
          <NavButton 
            icon={<Heart size={20} />} 
            label="Message" 
            active={currentSection === 'message'} 
            onClick={() => setCurrentSection('message')} 
          />
          <NavButton 
            icon={<Image size={20} />} 
            label="Photos" 
            active={currentSection === 'photos'} 
            onClick={() => setCurrentSection('photos')} 
          />
          <NavButton 
            icon={<Book size={20} />} 
            label="Poems" 
            active={currentSection === 'poems'} 
            onClick={() => setCurrentSection('poems')} 
          />
          <NavButton 
            icon={<Music size={20} />} 
            label="Songs" 
            active={currentSection === 'songs'} 
            onClick={() => setCurrentSection('songs')} 
          />
        </div>

        <div className="mt-8">
          {currentSection === 'message' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I know I hurt you, and I deeply regret my actions. 
                {showFullMessage && (
                  <>
                    <br /><br />
                    I value our connection more than anything, and I hope you can forgive me. 
                    My heart is truly sorry for the pain I've caused.
                    <br /><br />
                    Every moment without your smile feels like an eternity. 
                    Please give me a chance to make things right and prove how much you mean to me.
                  </>
                )}
              </p>

              {!showFullMessage && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowFullMessage(true)}
                  className="bg-[#FFDEE2] text-gray-800 px-6 py-3 rounded-full hover:bg-[#FFB6C1] transition-colors"
                >
                  Read More
                </motion.button>
              )}

              {showFullMessage && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#E5DEFF] text-gray-800 px-6 py-3 rounded-full hover:bg-[#D3C4FF] transition-colors"
                >
                  I Hope You Can Forgive Me
                </motion.button>
              )}
            </motion.div>
          )}

          {currentSection === 'photos' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                  {photos.map((photo, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col items-center justify-center p-6">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                              <img
                                src={photo.url}
                                alt={`Photo ${index + 1}`}
                                className="h-full w-full object-cover transition-all hover:scale-105"
                              />
                            </div>
                            <p className="mt-4 text-center text-gray-600 italic">{photo.caption}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </motion.div>
          )}

          {currentSection === 'poems' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto"
            >
              <Carousel>
                <CarouselContent>
                  {poems.map((poem, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-[#FFB6C1] bg-white/90">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center">{poem.title}</h3>
                          <p className="text-gray-600 whitespace-pre-line text-center leading-relaxed">{poem.content}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </motion.div>
          )}

          {currentSection === 'songs' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto"
            >
              <Carousel>
                <CarouselContent>
                  {songs.map((song, index) => (
                    <CarouselItem key={index}>
                      <Card className="border-[#D3C4FF] bg-white/90">
                        <CardContent className="p-6">
                          <div className="flex justify-center mb-4">
                            <Music size={32} className="text-[#9b87f5]" />
                          </div>
                          <h3 className="text-2xl font-serif text-gray-800 mb-4 text-center">{song.title}</h3>
                          <p className="text-gray-600 whitespace-pre-line text-center italic leading-relaxed">{song.lyrics}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
              </Carousel>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

// Navigation Button Component
const NavButton = ({ 
  icon, 
  label, 
  active, 
  onClick 
}: { 
  icon: React.ReactNode; 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
      active 
        ? 'bg-[#9b87f5] text-white' 
        : 'bg-white/50 text-gray-700 hover:bg-white/70'
    }`}
  >
    {icon}
    <span>{label}</span>
  </motion.button>
);

export default SweetApology;
