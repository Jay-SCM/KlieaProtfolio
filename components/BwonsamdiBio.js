import React from 'react';
import ColorGrad from './ColorGrad'; // Import the ColorGrad component
import styles from '../styles/BioBoxExt.module.css';
import Card from './BwonsamdiBioCard';

const BwonsamdiBio = () => {
  return (
    <div className={styles.container}>
      {/* Render the ColorGrad component as the background */}
      <ColorGrad />

      {/* Content of AhriBio component */}
      <div className={styles.content}>
        {/* Image Card */}
        <Card imageUrl="/bwonsamdi3.jpg" title="Ahri The Nine Tailed Fox" />

        {/* Bio Box */}
        <div className={styles.bioBox}>
          <p>
        For most of her life, Ahri's origins were a mystery to her, the history of her vastayan tribe all but lost save for the twin gemstones she has carried her entire life. </p>

<p>Ahri's earliest memories are of running with icefoxes in the northern reaches of Shon-Xan.
   Though she knew she was not one of them, they clearly saw her as something of a kindred spirit,
   and came to accept her within the pack.In that wild, predatory existence, Ahri nonetheless felt a deeper connection to the forests around her.</p>

<p>In time, she came to understand that this was the magic of the vastaya that coursed through every fiber of her being,
   and the realm of spirits that lay beyond. With no one to teach her,
    instead she learned to call upon this power in her own ways—most often using it to quicken her reflexes in pursuit of prey.</p>
    
    
<p>If she was careful and close enough, she also found she might soothe a panicked deer, 
  so that it remained serene and calm even as she and her packmates sank their teeth into its flesh.</p>


<p>The world of mortals was as distant and unsettling to Ahri as it was to the icefoxes,
   but she felt drawn to it for reasons she could not explain. Humans in particular were coarse, gruff creatures…and when a band of huntsmen camped nearby,
   
<p>Ahri watched them from afar as they went about their grim business.
When one of them was wounded by a stray arrow, Ahri could feel his life seeping away.
 Knowing nothing but the instincts of a predator, she savored the spirit essence leaving his body,
and through it gained brief flashes of his memories—the lover he had lost in battle, and the children he had left behind when he came north.</p>
  
<p>Ahri subtly pushed his emotions from fear to sorrow to joy, and comforted him with visions of a sun-soaked meadow as he died.
Afterward, she found that human words now came to her easily, like something from a half-remembered dream, and Ahri knew the time had come to leave the pack behind.</p>


<p>Keeping to the fringes of society, she felt more alive than ever. Her predatory nature remained,
but she was caught up in a riot of new experiences, emotions, and customs across Ionia. Mortals, it seemed,
also became fascinated by her in return—and she often used this to her advantage, draining their essence while charming them with recollections of beauty,
hallucinations of deep longing, and occasionally dreams colored by raw sorrow.</p>


<p>She grew drunk on memories that were not her own, and exhilarated in ending the lives of others even as she felt the grief and woe she brought to her victims.
She experienced heartbreak and elation in tantalizing flashes that left her craving more. It was overwhelming,
but she sensed her own power fading whenever she tried to stay away, and could not help but partake again and again… 
In time, she began to see herself as mortals did: a monster.</p>

<p>Until one day, an artist stumbled upon her, hunched over a man as she drained his life essence from him.
Where others would run, he stayed, offering his own life essence in exchange for her heart. For the first time in her life,
Ahri let herself fall in love and be loved, wholly and completely.</p>


<p>Their days passed in warmth and laughter, Ahri curbing her hunger by feeding on her lover. She was truly happy...
until she lost control, draining her lover completely.
Ahri fell into despair, her grief consuming her as she mourned the loss of the first and only person she's ever truly loved.</p>


<p>The first and only person who ever truly loved her. Retreating even further from society, 
she became consumed with learning more about where she came from, in hopes that it would help her control her abilities.</p>


<p>With her twin sunstones in hand, she set out in search of others like her,
a journey that would take her out of Ionia and to Bilgewater. It was on the shores of the Shadow Isles where she finally discovered her ancestors,
the Vesani, a vastayan tribe that brought innovation and magic to the Blessed Isles before being wiped out by the Ruination.</p>

<p>Inspired by their memories, Ahri has set off to travel the world in search of other remnants of the Vesani.
She hopes to carry their legacy forward, bringing good into the world like they did. No longer burdened by the heavy weight of her regrets,
she also hopes to finally leave her stolen memories behind and create new memories of her own making.</p>
</p>
          {/* Add more paragraphs as needed */}
        </div>
      </div>
    </div>
  );
};

export default BwonsamdiBio;