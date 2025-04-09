
import React, { useState, useRef } from 'react';
import { Heart, Image, Music, Book, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
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

const SweetApology: React.FC = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [currentSection, setCurrentSection] = useState<'message' | 'photos' | 'poems' | 'songs'>('message');
  const [playingSongIndex, setPlayingSongIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
      audioRef.current.play();
      setPlayingSongIndex(index);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F1923] to-[#1EAEDB] p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/20 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-4xl w-full border border-white/30"
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
          <Heart color="#FF6B6B" size={64} fill="#1EAEDB" fillOpacity={0.5} />
        </motion.div>

        <h1 className="text-4xl font-bold text-center text-white mb-4 font-serif">
          I'm Sorry
        </h1>

        <Tabs defaultValue="message" className="w-full" onValueChange={(value) => setCurrentSection(value as any)}>
          <TabsList className="grid w-full grid-cols-4 bg-black/20">
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

          <TabsContent value="message" className="mt-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
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
                  className="bg-white text-[#1EAEDB] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  I Hope You Can Forgive Me
                </motion.button>
              )}
            </motion.div>
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
                        <Card className="border-[#1EAEDB]/30 bg-white/10">
                          <CardContent className="flex flex-col items-center justify-center p-6">
                            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                              <img
                                src={photo.url}
                                alt={`Photo ${index + 1}`}
                                className="h-full w-full object-cover transition-all hover:scale-105"
                              />
                            </div>
                            <p className="mt-4 text-center text-white italic">{photo.caption}</p>
                          </CardContent>
                        </Card>
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
                      <Card className="border-[#1EAEDB]/30 bg-white/10">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-serif text-white mb-4 text-center">{poem.title}</h3>
                          <p className="text-white/90 whitespace-pre-line text-center leading-relaxed">{poem.content}</p>
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
                            <Button 
                              variant="outline" 
                              size="icon"
                              className="bg-[#1EAEDB] text-white hover:bg-[#33C3F0] rounded-full h-12 w-12"
                              onClick={() => playPauseSong(index)}
                            >
                              {playingSongIndex === index ? <Pause size={20} /> : <Play size={20} />}
                            </Button>
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
        </Tabs>
      </motion.div>
    </div>
  );
};

export default SweetApology;
