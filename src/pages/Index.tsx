
import React, { useState, useRef, useEffect } from 'react';
import { Heart, Image, Music, Book, Play, Pause, RotateCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ValorantCharacters from "@/components/ValorantCharacters";
import { useToast } from "@/hooks/use-toast";

const SweetApology: React.FC = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [currentSection, setCurrentSection] = useState<'message' | 'photos' | 'poems' | 'songs'>('message');
  const [playingSongIndex, setPlayingSongIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
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
      lyrics: "When shadows fall and light grows dim,\nI reach for memories where we begin.\nThrough all my faults and all my flaws,\nMy love for you has never paused.",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    { 
      title: "Healing Hearts", 
      lyrics: "Let these words mend what I broke,\nRevive the trust that sorrow stole.\nWith every note and every line,\nI pray your heart rejoins with mine.",
      audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
  ];

  const playPauseSong = (index: number) => {
    if (playingSongIndex === index) {
      audioRef.current?.pause();
      setPlayingSongIndex(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(songs[index].audioSrc);
      audioRef.current.play().catch(e => {
        console.error("Error playing audio:", e);
        toast({
          title: "Playback Error",
          description: "Could not play the song. Please try again.",
          variant: "destructive"
        });
      });
      setPlayingSongIndex(index);
    }
  };

  // Show welcome notification when site is opened
  useEffect(() => {
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to My Apology",
        description: "I've created this to show you how sorry I am.",
        variant: "default"
      });
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F1923] via-[#1A3254] to-[#1EAEDB] p-4 overflow-hidden relative">
      {/* Valorant Characters in the background */}
      <ValorantCharacters />

      {/* Animated particles in Valorant style */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 4 + 1,
              height: Math.random() * 4 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-4xl w-full border border-[#1EAEDB]/30 relative z-10"
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
          <motion.div
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
          >
            <Heart color="#FF6B6B" size={64} fill="#1EAEDB" fillOpacity={0.5} />
          </motion.div>
        </motion.div>

        <motion.h1 
          className="text-4xl font-bold text-center text-white mb-4 font-serif"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          I'm Sorry
        </motion.h1>

        <Tabs defaultValue="message" className="w-full" onValueChange={(value) => setCurrentSection(value as any)}>
          <TabsList className="grid w-full grid-cols-4 bg-black/20 mb-6">
            <TabsTrigger value="message" className="data-[state=active]:bg-[#1EAEDB] data-[state=active]:text-white">
              <Heart size={18} className="mr-2" />
              Message
            </TabsTrigger>
            <TabsTrigger value="photos" className="data-[state=active]:bg-[#1EAEDB] data-[state=active]:text-white">
              <Image size={18} className="mr-2" />
              Photos
            </TabsTrigger>
            <TabsTrigger value="poems" className="data-[state=active]:bg-[#1EAEDB] data-[state=active]:text-white">
              <Book size={18} className="mr-2" />
              Poems
            </TabsTrigger>
            <TabsTrigger value="songs" className="data-[state=active]:bg-[#1EAEDB] data-[state=active]:text-white">
              <Music size={18} className="mr-2" />
              Songs
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="message" className="mt-6">
                <div className="text-center">
                  <p className="text-lg text-white mb-6 leading-relaxed">
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
                      className="bg-[#1EAEDB] text-white px-6 py-3 rounded-full hover:bg-[#33C3F0] transition-colors"
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
                      className="bg-white text-[#1EAEDB] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                    >
                      I Hope You Can Forgive Me
                    </motion.button>
                  )}
                </div>
              </TabsContent>
            
              <TabsContent value="photos" className="mt-6">
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
                            <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }}>
                              <Card className="border-[#1EAEDB]/30 bg-white/10">
                                <CardContent className="flex flex-col items-center justify-center p-6">
                                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                                    <motion.img
                                      src={photo.url}
                                      alt={`Photo ${index + 1}`}
                                      className="h-full w-full object-cover"
                                      whileHover={{ scale: 1.05 }}
                                      transition={{ duration: 0.3 }}
                                    />
                                  </div>
                                  <p className="mt-4 text-center text-white italic">{photo.caption}</p>
                                </CardContent>
                              </Card>
                            </motion.div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 bg-white/20 hover:bg-white/40" />
                    <CarouselNext className="right-1 bg-white/20 hover:bg-white/40" />
                  </Carousel>
                </motion.div>
              </TabsContent>

              <TabsContent value="poems" className="mt-6">
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
                          <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                            <Card className="border-[#1EAEDB]/30 bg-white/10">
                              <CardContent className="p-6">
                                <motion.h3 
                                  className="text-2xl font-serif text-white mb-4 text-center"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 }}
                                >
                                  {poem.title}
                                </motion.h3>
                                <motion.p 
                                  className="text-white/90 whitespace-pre-line text-center leading-relaxed"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.4 }}
                                >
                                  {poem.content}
                                </motion.p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 bg-white/20 hover:bg-white/40" />
                    <CarouselNext className="right-1 bg-white/20 hover:bg-white/40" />
                  </Carousel>
                </motion.div>
              </TabsContent>

              <TabsContent value="songs" className="mt-6">
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
                          <Card className="border-[#1EAEDB]/30 bg-white/10">
                            <CardContent className="p-6">
                              <div className="flex justify-center mb-4">
                                <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Button 
                                    variant="outline" 
                                    size="icon"
                                    className="bg-[#1EAEDB] text-white hover:bg-[#33C3F0] rounded-full h-12 w-12"
                                    onClick={() => playPauseSong(index)}
                                  >
                                    {playingSongIndex === index ? (
                                      <Pause size={20} />
                                    ) : (
                                      <Play size={20} />
                                    )}
                                  </Button>
                                </motion.div>
                                
                                {playingSongIndex === index && (
                                  <motion.div 
                                    className="absolute ml-16"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                  >
                                    <RotateCw className="text-white h-5 w-5 animate-spin" />
                                  </motion.div>
                                )}
                              </div>
                              <h3 className="text-2xl font-serif text-white mb-4 text-center">{song.title}</h3>
                              <p className="text-white/90 whitespace-pre-line text-center italic leading-relaxed">{song.lyrics}</p>
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-1 bg-white/20 hover:bg-white/40" />
                    <CarouselNext className="right-1 bg-white/20 hover:bg-white/40" />
                  </Carousel>
                </motion.div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SweetApology;
