const quotes = [
    // Ancient Wisdom & Stoicism
    "\"The only true wisdom is in knowing you know nothing.\" — Socrates",
    "\"It does not matter how slowly you go as long as you do not stop.\" — Confucius",
    "\"He who has a why to live can bear almost any how.\" — Friedrich Nietzsche",
    "\"Waste no more time arguing about what a good man should be. Be one.\" — Marcus Aurelius",
    "\"The unexamined life is not worth living.\" — Socrates",
    "\"Happiness depends upon ourselves.\" — Aristotle",
    "\"We suffer more often in imagination than in reality.\" — Seneca",
    "\"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.\" — Ralph Waldo Emerson",
    "\"Simplicity is the ultimate sophistication.\" — Leonardo da Vinci",
    "\"Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.\" — Immanuel Kant",
    "\"You have power over your mind - not outside events. Realize this, and you will find strength.\" — Marcus Aurelius",
    "\"Dwell on the beauty of life. Watch the stars, and see yourself running with them.\" — Marcus Aurelius",
    "\"The best revenge is to be unlike him who performed the injury.\" — Marcus Aurelius",
    "\"If it is not right do not do it; if it is not true do not say it.\" — Marcus Aurelius",
    "\"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.\" — Marcus Aurelius",
    "\"The soul becomes dyed with the color of its thoughts.\" — Marcus Aurelius",
    "\"Man conquers the world by conquering himself.\" — Zeno of Citium",
    "\"No man is free who is not master of himself.\" — Epictetus",
    "\"It's not what happens to you, but how you react to it that matters.\" — Epictetus",
    
    // Eastern Philosophy & Spirituality
    "\"Nature does not hurry, yet everything is accomplished.\" — Lao Tzu",
    "\"The journey of a thousand miles begins with one step.\" — Lao Tzu",
    "\"He who knows others is wise; he who knows himself is enlightened.\" — Lao Tzu",
    "\"When you are content to be simply yourself and don't compare or compete, everyone will respect you.\" — Lao Tzu",
    "\"Be like water.\" — Lao Tzu",
    "\"Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.\" — Rumi",
    "\"What you seek is seeking you.\" — Rumi",
    "\"Don't be satisfied with stories, how things have gone with others. Unfold your own myth.\" — Rumi",
    "\"The wound is the place where the Light enters you.\" — Rumi",
    "\"Let the beauty of what you love be what you do.\" — Rumi",
    "\"Peace comes from within. Do not seek it without.\" — Buddha",
    "\"The mind is everything. What you think you become.\" — Buddha",
    "\"Three things cannot be long hidden: the sun, the moon, and the truth.\" — Buddha",
    "\"To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.\" — Buddha",
    "\"Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.\" — Thich Nhat Hanh",
    "\"Smile, breathe and go slowly.\" — Thich Nhat Hanh",
    "\"Because you are alive, everything is possible.\" — Thich Nhat Hanh",
    "\"The present moment is the only time over which we have dominion.\" — Thich Nhat Hanh",
    "\"Muddy water is best cleared by leaving it alone.\" — Alan Watts",
    "\"The only way to make sense out of change is to plunge into it, move with it, and join the dance.\" — Alan Watts",
    
    // Creativity & Art
    "\"Every child is an artist. The problem is how to remain an artist once we grow up.\" — Pablo Picasso",
    "\"Art is the lie that enables us to realize the truth.\" — Pablo Picasso",
    "\"Creativity is intelligence having fun.\" — Albert Einstein",
    "\"Learn the rules like a pro, so you can break them like an artist.\" — Pablo Picasso",
    "\"To create, one must first question everything.\" — Eileen Gray",
    "\"Creativity takes courage.\" — Henri Matisse",
    "\"Great things are done by a series of small things brought together.\" — Vincent Van Gogh",
    "\"I dream my painting and I paint my dream.\" — Vincent Van Gogh",
    "\"The object of art is not to reproduce reality, but to create a reality of the same intensity.\" — Alberto Giacometti",
    "\"A work of art which did not begin in emotion is not art.\" — Paul Cezanne",
    "\"You can't use up creativity. The more you use, the more you have.\" — Maya Angelou",
    "\"The universe buries strange jewels deep within us all, and then stands back to see if we can find them.\" — Elizabeth Gilbert",
    "\"Inspiration exists, but it has to find you working.\" — Pablo Picasso",
    "\"Everything you can imagine is real.\" — Pablo Picasso",
    "\"Life isn't about finding yourself. Life is about creating yourself.\" — George Bernard Shaw",
    "\"The chief enemy of creativity is 'good' sense.\" — Pablo Picasso",
    "\"An idea that is not dangerous is unworthy of being called an idea at all.\" — Oscar Wilde",
    "\"Logic will get you from A to B. Imagination will take you everywhere.\" — Albert Einstein",
    "\"Art washes away from the soul the dust of everyday life.\" — Pablo Picasso",

    // Growth & Mindset
    "\"Growth is painful. Change is painful. But nothing is as painful as staying stuck where you don't belong.\" — Mandy Hale",
    "\"Do not wait for the perfect moment, take the moment and make it perfect.\" — Zoey Sayward",
    "\"We are what we repeatedly do. Excellence, then, is not an act, but a habit.\" — Aristotle",
    "\"Believe you can and you're halfway there.\" — Theodore Roosevelt",
    "\"The only way to do great work is to love what you do.\" — Steve Jobs",
    "\"Your time is limited, don't waste it living someone else's life.\" — Steve Jobs",
    "\"Stay hungry, stay foolish.\" — Steve Jobs",
    "\"Innovation distinguishes between a leader and a follower.\" — Steve Jobs",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" — Winston Churchill",
    "\"The future belongs to those who believe in the beauty of their dreams.\" — Eleanor Roosevelt",
    "\"It always seems impossible until it's done.\" — Nelson Mandela",
    "\"Don't count the days, make the days count.\" — Muhammad Ali",
    "\"The glory is not in never falling, but in rising every time we fall.\" — Confucius",
    "\"What we fear doing most is usually what we most need to do.\" — Tim Ferriss",
    "\"If you are not willing to risk the usual, you will have to settle for the ordinary.\" — Jim Rohn",
    "\"Opportunities don't happen. You create them.\" — Chris Grosser",
    "\"I have not failed. I've just found 10,000 ways that won't work.\" — Thomas Edison",
    "\"The best way to predict the future is to create it.\" — Peter Drucker",
    "\"Action is the foundational key to all success.\" — Pablo Picasso",
    "\"Do one thing every day that scares you.\" — Eleanor Roosevelt",

    // Nature & The Universe
    "\"Look deep into nature, and then you will understand everything better.\" — Albert Einstein",
    "\"In every walk with nature one receives far more than he seeks.\" — John Muir",
    "\"The earth has music for those who listen.\" — George Santayana",
    "\"To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.\" — Jane Austen",
    "\"Nature is not a place to visit. It is home.\" — Gary Snyder",
    "\"Colors are the smiles of nature.\" — Leigh Hunt",
    "\"Study nature, love nature, stay close to nature. It will never fail you.\" — Frank Lloyd Wright",
    "\"The poetry of the earth is never dead.\" — John Keats",
    "\"Heaven is under our feet as well as over our heads.\" — Henry David Thoreau",
    "\"To forget how to dig the earth and to tend the soil is to forget ourselves.\" — Mahatma Gandhi",
    "\"We are made of starstuff.\" — Carl Sagan",
    "\"The universe is not outside of you. Look inside yourself; everything that you want, you already are.\" — Rumi",
    "\"You are not a drop in the ocean. You are the entire ocean in a drop.\" — Rumi",
    "\"We are the cosmos made conscious and life is the means by which the universe understands itself.\" — Brian Cox",
    "\"The clearest way into the Universe is through a forest wilderness.\" — John Muir",
    "\"Adopt the pace of nature: her secret is patience.\" — Ralph Waldo Emerson",
    "\"Nature always wears the colors of the spirit.\" — Ralph Waldo Emerson",
    "\"Just living is not enough... one must have sunshine, freedom, and a little flower.\" — Hans Christian Andersen",
    "\"I go to nature to be soothed and healed, and to have my senses put in order.\" — John Burroughs",
    "\"Wilderness is not a luxury but a necessity of the human spirit.\" — Edward Abbey",
    "\"The goal of life is to make your heartbeat match the beat of the universe, to match your nature with Nature.\" — Joseph Campbell",
    "\"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful.\" — Alice Walker",
    "\"Nature is painting for us, day after day, pictures of infinite beauty if only we have the eyes to see them.\" — John Ruskin",
    "\"The sea, once it casts its spell, holds one in its net of wonder forever.\" — Jacques Yves Cousteau",
    "\"Look at the stars. See their beauty. And in that beauty, see yourself.\" — Draya Mooney",
    "\"I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, 'This is what it is to be happy.'\" — Sylvia Plath",
    "\"The sun does not shine for a few trees and flowers, but for the wide world's joy.\" — Henry Ward Beecher",
    "\"There is a pleasure in the pathless woods, There is a rapture on the lonely shore.\" — Lord Byron",
    "\"Keep close to Nature's heart... and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.\" — John Muir",
    "\"Nature is the art of God.\" — Dante Alighieri",
    "\"The universe is full of magical things patiently waiting for our wits to grow sharper.\" — Eden Phillpotts",
    "\"My soul can find no staircase to Heaven unless it be through Earth's loveliness.\" — Michelangelo",
    "\"We do not inherit the earth from our ancestors, we borrow it from our children.\" — Native American Proverb",
    "\"The mountains are calling and I must go.\" — John Muir",
    "\"The silence of nature is very real. It surrounds you... you can feel it.\" — Ted Trueblood",
    "\"The best remedy for those who are afraid, lonely or unhappy is to go outside.\" — Anne Frank",
    "\"Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.\" — Langston Hughes",
    "\"The earth laughs in flowers.\" — Ralph Waldo Emerson",
    "\"If you wish to know the divine, feel the wind on your face and the warm sun on your hand.\" — Buddha",
    "\"The morning breeze has secrets to tell you. Do not go back to sleep.\" — Rumi",
    "\"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.\" — Henry David Thoreau",
    "\"Every flower is a soul blossoming in nature.\" — Gerard De Nerval",
    "\"Not just beautiful, though—the stars are like the trees in the forest, alive and breathing. And they're watching me.\" — Haruki Murakami",
    "\"For most of history, man has had to fight nature to survive; in this century he is beginning to realize that, in order to survive, he must protect it.\" — Jacques-Yves Cousteau",
    "\"Nature is not a place to visit. It is home.\" — Gary Snyder",

    // Mindfulness & Presence
    "\"Be happy for this moment. This moment is your life.\" — Omar Khayyam",
    "\"Life is available only in the present moment.\" — Thich Nhat Hanh",
    "\"The present moment is filled with joy and happiness. If you are attentive, you will see it.\" — Thich Nhat Hanh",
    "\"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.\" — Buddha",
    "\"Realize deeply that the present moment is all you have. Make the NOW the primary focus of your life.\" — Eckhart Tolle",
    "\"Wherever you are, be there totally.\" — Eckhart Tolle",
    "\"Unease, anxiety, tension, stress, worry - all forms of fear - are caused by too much future, and not enough presence.\" — Eckhart Tolle",
    "\"You must live in the present, launch yourself on every wave, find your eternity in each moment.\" — Henry David Thoreau",
    "\"With the past, I have nothing to do; nor with the future. I live now.\" — Ralph Waldo Emerson",
    "\"Life is a dance. Mindfulness is witnessing that dance.\" — Amit Ray",
    "\"The best way to capture moments is to pay attention. This is how we cultivate mindfulness.\" — Jon Kabat-Zinn",
    "\"Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.\" — Thich Nhat Hanh",
    "\"To understand the immeasurable, the mind must be extraordinarily quiet, still.\" — J. Krishnamurti",
    "\"The quieter you become, the more you can hear.\" — Ram Dass",
    "\"Be here now.\" — Ram Dass",
    "\"When you walk, walk. When you eat, eat.\" — Zen Proverb",
    "\"Everything that has a beginning has an ending. Make your peace with that and all will be well.\" — Jack Kornfield",
    "\"The little things? The little moments? They aren't little.\" — Jon Kabat-Zinn",
    "\"Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.\" — Hermann Hesse",
    "\"Nothing is softer or more flexible than water, yet nothing can resist it.\" — Lao Tzu",

    // Courage & Strength
    "\"Courage is not the absence of fear, but the triumph over it.\" — Nelson Mandela",
    "\"He who is not courageous enough to take risks will accomplish nothing in life.\" — Muhammad Ali",
    "\"It takes courage to grow up and become who you really are.\" — E.E. Cummings",
    "\"Scared is what you're feeling. Brave is what you're doing.\" — Emma Donoghue",
    "\"You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.\" — Eleanor Roosevelt",
    "\"The cave you fear to enter holds the treasure you seek.\" — Joseph Campbell",
    "\"Only those who will risk going too far can possibly find out how far one can go.\" — T.S. Eliot",
    "\"Do not pray for an easy life, pray for the strength to endure a difficult one.\" — Bruce Lee",
    "\"Tough times never last, but tough people do.\" — Robert H. Schuller",
    "\"Whatever you do, you need courage. Whatever course you decide upon, there is always someone to tell you that you are wrong.\" — Ralph Waldo Emerson",
    "\"In the middle of difficulty lies opportunity.\" — Albert Einstein",
    "\"Fall seven times, stand up eight.\" — Japanese Proverb",
    "\"Strength does not come from physical capacity. It comes from an indomitable will.\" — Mahatma Gandhi",
    "\"Mastering others is strength. Mastering yourself is true power.\" — Lao Tzu",
    "\"Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.\" — Kahlil Gibran",
    "\"Pain is inevitable. Suffering is optional.\" — Haruki Murakami",
    "\"The man who moves a mountain begins by carrying away small stones.\" — Confucius",
    "\"Your playing small does not serve the world.\" — Marianne Williamson",
    "\"Go confidently in the direction of your dreams! Live the life you've imagined.\" — Henry David Thoreau",
    "\"Life shrinks or expands in proportion to one's courage.\" — Anais Nin",

    // Beauty & Wonder
    "\"Everything has beauty, but not everyone sees it.\" — Confucius",
    "\"Beauty is truth, truth beauty.\" — John Keats",
    "\"There is nothing like a dream to create the future.\" — Victor Hugo",
    "\"Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.\" — Marcel Proust",
    "\"The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.\" — Helen Keller",
    "\"Beauty begins the moment you decide to be yourself.\" — Coco Chanel",
    "\"To me, a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.\" — Helen Keller",
    "\"And above all, watch with glittering eyes the whole world around you because the greatest secrets are always hidden in the most unlikely places.\" — Roald Dahl",
    "\"We are all in the gutter, but some of us are looking at the stars.\" — Oscar Wilde",
    "\"There are two ways to live: you can live as if nothing is a miracle; you can live as if everything is a miracle.\" — Albert Einstein",
    "\"Wonder is the beginning of wisdom.\" — Socrates",
    "\"Blessed are they who see beautiful things in humble places where other people see nothing.\" — Camille Pissarro",
    "\"The world is full of magic things, patiently waiting for our senses to grow sharper.\" — W.B. Yeats",
    "\"If you truly love nature, you will find beauty everywhere.\" — Vincent Van Gogh",
    "\"Beauty is the illumination of your soul.\" — John O'Donohue",
    "\"The power of finding beauty in the humblest things makes home happy and life lovely.\" — Louisa May Alcott",
    "\"What a strange thing! to be alive beneath cherry blossoms.\" — Kobayashi Issa",
    "\"Never lose an opportunity of seeing anything beautiful, for beauty is God's handwriting.\" — Ralph Waldo Emerson",
    "\"Those who don't believe in magic will never find it.\" — Roald Dahl",
    "\"Keep your face always toward the sunshine—and shadows will fall behind you.\" — Walt Whitman",
];

const natureQuotes = [
    "\"Nature does not hurry, yet everything is accomplished.\" — Lao Tzu",
    "\"Be like water.\" — Lao Tzu",
    "\"Muddy water is best cleared by leaving it alone.\" — Alan Watts",
    "\"Look deep into nature, and then you will understand everything better.\" — Albert Einstein",
    "\"In every walk with nature one receives far more than he seeks.\" — John Muir",
    "\"The earth has music for those who listen.\" — George Santayana",
    "\"To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.\" — Jane Austen",
    "\"Nature is not a place to visit. It is home.\" — Gary Snyder",
    "\"Colors are the smiles of nature.\" — Leigh Hunt",
    "\"Study nature, love nature, stay close to nature. It will never fail you.\" — Frank Lloyd Wright",
    "\"The poetry of the earth is never dead.\" — John Keats",
    "\"Heaven is under our feet as well as over our heads.\" — Henry David Thoreau",
    "\"To forget how to dig the earth and to tend the soil is to forget ourselves.\" — Mahatma Gandhi",
    "\"We are made of starstuff.\" — Carl Sagan",
    "\"The clearest way into the Universe is through a forest wilderness.\" — John Muir",
    "\"Adopt the pace of nature: her secret is patience.\" — Ralph Waldo Emerson",
    "\"Nature always wears the colors of the spirit.\" — Ralph Waldo Emerson",
    "\"Just living is not enough... one must have sunshine, freedom, and a little flower.\" — Hans Christian Andersen",
    "\"I go to nature to be soothed and healed, and to have my senses put in order.\" — John Burroughs",
    "\"Wilderness is not a luxury but a necessity of the human spirit.\" — Edward Abbey",
    "\"The goal of life is to make your heartbeat match the beat of the universe, to match your nature with Nature.\" — Joseph Campbell",
    "\"In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful.\" — Alice Walker",
    "\"Nature is painting for us, day after day, pictures of infinite beauty if only we have the eyes to see them.\" — John Ruskin",
    "\"The sea, once it casts its spell, holds one in its net of wonder forever.\" — Jacques Yves Cousteau",
    "\"Look at the stars. See their beauty. And in that beauty, see yourself.\" — Draya Mooney",
    "\"I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, 'This is what it is to be happy.'\" — Sylvia Plath",
    "\"The sun does not shine for a few trees and flowers, but for the wide world's joy.\" — Henry Ward Beecher",
    "\"There is a pleasure in the pathless woods, There is a rapture on the lonely shore.\" — Lord Byron",
    "\"Keep close to Nature's heart... and break clear away, once in a while, and climb a mountain or spend a week in the woods. Wash your spirit clean.\" — John Muir",
    "\"Nature is the art of God.\" — Dante Alighieri",
    "\"My soul can find no staircase to Heaven unless it be through Earth's loveliness.\" — Michelangelo",
    "\"We do not inherit the earth from our ancestors, we borrow it from our children.\" — Native American Proverb",
    "\"The mountains are calling and I must go.\" — John Muir",
    "\"The silence of nature is very real. It surrounds you... you can feel it.\" — Ted Trueblood",
    "\"The best remedy for those who are afraid, lonely or unhappy is to go outside.\" — Anne Frank",
    "\"Let the rain kiss you. Let the rain beat upon your head with silver liquid drops. Let the rain sing you a lullaby.\" — Langston Hughes",
    "\"The earth laughs in flowers.\" — Ralph Waldo Emerson",
    "\"If you wish to know the divine, feel the wind on your face and the warm sun on your hand.\" — Buddha",
    "\"The morning breeze has secrets to tell you. Do not go back to sleep.\" — Rumi",
    "\"Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.\" — Henry David Thoreau",
    "\"Every flower is a soul blossoming in nature.\" — Gerard De Nerval",
    "\"Not just beautiful, though—the stars are like the trees in the forest, alive and breathing. And they're watching me.\" — Haruki Murakami",
    "\"For most of history, man has had to fight nature to survive; in this century he is beginning to realize that, in order to survive, he must protect it.\" — Jacques-Yves Cousteau",
    "\"If you truly love nature, you will find beauty everywhere.\" — Vincent Van Gogh",
    "\"To me, a lush carpet of pine needles or spongy grass is more welcome than the most luxurious Persian rug.\" — Helen Keller",
    "\"What a strange thing! to be alive beneath cherry blossoms.\" — Kobayashi Issa",
    "\"Nothing is softer or more flexible than water, yet nothing can resist it.\" — Lao Tzu",
];

function parseQuoteEntry(entry) {
    const match = entry.match(/^"(.+)"\s*—\s*(.+)$/);
    if (match) {
        return { text: match[1], author: match[2] };
    }
    return { text: entry.replace(/^"|"$/g, ''), author: '' };
}

function getQuotePool() {
    const block = document.getElementById('nav-quote');
    const pool = block && block.getAttribute('data-quote-pool');
    if (pool === 'nature') {
        return natureQuotes;
    }
    return quotes;
}

function renderNavQuote() {
    const block = document.getElementById('nav-quote');
    const textEl = document.getElementById('nav-quote-text');
    const authorEl = document.getElementById('nav-quote-author');
    const pool = getQuotePool();
    if (!textEl || !pool.length) return;

    const picked = parseQuoteEntry(pool[Math.floor(Math.random() * pool.length)]);
    textEl.textContent = picked.text;
    if (authorEl) {
        authorEl.textContent = picked.author;
    }

    const reveal = () => block?.classList.add('is-visible');

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => requestAnimationFrame(reveal));
    } else {
        requestAnimationFrame(reveal);
    }
}

document.addEventListener('DOMContentLoaded', renderNavQuote);
