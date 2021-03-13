/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import React from 'react';
import { Column } from '../src/components/layout/Column';
import { Flexbox } from '../src/components/layout/Flexbox';
import { Link } from '../src/components/Link';
import { Paragraph } from '../src/components/Paragraph';
import { Quote } from '../src/components/Quote';
import { Section } from '../src/components/Section';
import { Img } from '../src/components/Img';
import { List } from '../src/components/List/List';

const Homepage = () => (
    <div>
        <Head>
            <title>Witkacy remake</title>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏼‍🎨</text></svg>"></link>
        </Head>
        <Flexbox justify="center">
            <Column>
                <Section type="h1" text="Stanisław Ignacy Witkiewicz" />
                <Paragraph>
                    Stanisław Ignacy Witkiewicz (24 February 1885 – 18 September 1939),
                    commonly known as Witkacy, was a
                    {' '}
                    <Link>Polish</Link>
                    {' '}
                    writer, painter,
                    {' '}
                    <Link>philosopher</Link>
                    ,
                    theorist, playwright, novelist, and photographer active before
                    {' '}
                    <Link>World War I</Link>
                    {' '}
                    and
                    during the
                    {' '}
                    <Link>interwar period.</Link>
                </Paragraph>
                <Section type="h2" text="Life ✨" />
                <Paragraph>
                    Born in
                    {' '}
                    <Link>Warsaw</Link>
                    , Stanisław Ignacy Witkiewicz was a son of the painter, architect and an art critic
                    {' '}
                    <Link>Stanisław Witkiewicz.</Link>
                    {' '}
                    His mother was Maria Pietrzkiewicz Witkiewiczowa. Both of his parents were born in the
                    {' '}
                    <Link>Samogitian</Link>
                    {' '}
                    region of
                    {' '}
                    <Link>Lithuania.</Link>
                    {' '}
                    His godmother was the internationally famous actress
                    {' '}
                    <Link>Helena Modrzejewska.</Link>
                </Paragraph>
                <Paragraph>
                    Little Witkacy with his father, ca. 1893
                    Witkiewicz was reared at the family home in
                    {' '}
                    <Link>Zakopane.</Link>
                    {' '}
                    In accordance with his father's
                    {' '}
                    <Link>antipathy</Link>
                    {' '}
                    to the "servitude of the school," he was
                    {' '}
                    <Link>home-schooled</Link>
                    {' '}
                    and encouraged to develop his talents across a range of creative fields. Against his fathers wishes he studied at the
                    {' '}
                    <Link>Kraków Academy of Fine Arts</Link>
                    {' '}
                    with Józef Mehoffer and
                    {' '}
                    <Link>Jan Stanisławski.</Link>
                </Paragraph>

                <Paragraph>
                    Witkiewicz was close friends with composer
                    {' '}
                    <Link>Karol Szymanowski</Link>
                    {' '}
                    and, from childhood, with
                    {' '}
                    <Link>Bronisław Malinowski</Link>
                    {' '}
                    and
                    {' '}
                    <Link>Zofia Romer.</Link>
                    {' '}
                    Romer was romantically linked to both Bronisław Malinowski and Witkiewicz. He had a tumultuous affair with prominent actress Irena Solska who according to Anna Micińska is represented as the heroine Akne Montecalfi in his first novel, The 622 Downfalls of Bungo or The Demonic Woman, 1911. According to Micińska he also represented himself as the character Bungo and Malinowski as the Duke of Nevermore. The unfinished novel, which was not published until 1972, also describes erotic encounters between Bungo and the Duke of Nevermore. Taught wet plate photography by his father, it was during this period that he also began producing the intimate portrait photography for which he is known; producing striking portraits of his circle in Zakopane and many self-portraits.
                </Paragraph>
                <Img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Witkacy_Autoportret_1924.jpg"
                    width={229 * 2}
                    height={323 * 2}
                    text="Self-portrait, 1924"
                />

                <Paragraph>
                    In July 1916 he was seriously wounded in the battle on
                    {' '}
                    <Link>Stokhid River</Link>
                    {' '}
                    in what is now Ukraine and was evacuated to St Petersburg where he witnessed the
                    {' '}
                    <Link>Russian Revolution.</Link>
                    {' '}
                    He claimed that he worked out his philosophical principles during an artillery barrage, and that when the Revolution broke out he was elected
                    {' '}
                    <Link>political commissar</Link>
                    {' '}
                    of his regiment. His later works would show his fear of social revolution and foreign invasion, often couched in
                    {' '}
                    <Link>absurdist</Link>
                    {' '}
                    language.
                </Paragraph>
                <Paragraph>
                    He had begun to support himself through portrait painting and continued to do so on his return to Zakopane in
                    {' '}
                    <Link>Poland.</Link>
                    {' '}
                    He soon entered into a major creative phase, setting out his principles in New Forms in Painting and Introduction to the Theory of Pure Form in the Theatre. He associated with a group of "formist" artists in the early 1920s and wrote most of his plays during this period. Of about forty plays written by Witkiewicz between 1918 and 1925, twenty-one survive, and only Jan Maciej Karol Hellcat met with any public success during the author's lifetime. The original Polish manuscript of The Crazy Locomotive was also lost; the play,
                    {' '}
                    <Link>back-translated</Link>
                    {' '}
                    from two French versions, was not published until 1962.
                </Paragraph>
                <Quote text="There must be repressed truth even in lies." />
                <Paragraph>
                    After 1925, and taking the name 'Witkacy', the artist ironically re-branded his portrait painting which provided his economic sustenance as The S.I. Witkiewicz Portrait Painting Company, with the tongue in cheek motto: "The customer must always be satisfied". Several of the so-called grades of portraits were offered, from the merely representational to the more
                    {' '}
                    <Link>expressionistic</Link>
                    {' '}
                    and the narcotics-assisted. Many of his paintings were annotated with mnemonics listing the drugs taken while painting a particular painting, even if this happened to be only a cup of coffee. He also varied the spelling of his name, signing himself Witkac, Witkatze, Witkacjusz, Vitkacius and Vitecasse — the last being French for "breaks quickly".
                </Paragraph>
                <Paragraph>
                    In the late 1920s he turned to novel-writing, writing two works, Farewell to Autumn and
                    {' '}
                    <Link>Insatiability.</Link>
                    {' '}
                    The latter, his major work, encompasses geopolitics, psychoactive drugs, and philosophy. In 1935 he was awarded the Golden Laurel of the
                    {' '}
                    <Link>Polish Academy of Literature</Link>
                    {' '}
                    for his novels.
                </Paragraph>
                <Paragraph>
                    During the 1930s, Witkiewicz published a text on his experiences of narcotics,
                    {' '}
                    <Link>including peyote</Link>
                    , and pursued his interests in philosophy writing, Concepts and Principles Implied by the Concept of Existence 1935.[10] He also promoted emerging writers such as
                    {' '}
                    <Link>Bruno Schulz.</Link>
                </Paragraph>
                <Section type="h2" text="Death 😵" />
                <Paragraph>
                    Shortly after Poland was
                    {' '}
                    <Link>invaded</Link>
                    {' '}
                    by Germany in September 1939, Witkiewicz escaped with his young lover Czesława to the rural
                    {' '}
                    <Link>frontier</Link>
                    {' '}
                    town of
                    {' '}
                    <Link>Jeziory</Link>
                    , in what was then eastern Poland. After hearing the news of the
                    {' '}
                    <Link>Soviet invasion of Poland</Link>
                    {' '}
                    on 17 September 1939, Witkacy committed suicide on 18 September by taking a drug overdose and trying to slit his wrists. He convinced Czesława to attempt suicide with him by consuming
                    {' '}
                    <Link>Luminal</Link>
                    , but she survived. The film Mystification 2010, written and directed by Jacek Koprowicz proposed that Witkiewicz faked his own death and lived secretly in Poland until 1968.
                </Paragraph>
                <Img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Witkiewicz-Fantazja-Bajka.jpg"
                    width={781}
                    height={385}
                    text="Fantasy – Fairy-tale, 1922"
                />
                <Section type="h2" text="Legacy 📜" />
                <Paragraph>
                    Witkiewicz had died in some obscurity but his reputation began to rise soon after the war, which had destroyed his life and devastated Poland. Outside of Poland his work was discussed as a precursor to post-ww2 European drama in Martin Esslin's influential "Theatre of the Absurd" 1961,[15] and later in Hans-Theis Lehmann's "Postdramatic Theatre" 2006.[16] Konstanty Puzyna collected his surviving dramatic writings in two volumes in "Dramaty" (Dramas) 1962 which revived interest in his plays in Poland. Through his translations and scholarship, Daniel Gerould introduced English-language audiences to the writings of Witkiewicz.
                </Paragraph>
                <Paragraph>
                    Czesław Miłosz framed his argument in The Captive Mind around a discussion of Witkiewicz's novel, Insatiability. The artist and theater director Tadeusz Kantor was inspired by the Cricot group, through which Witkiewicz had presented his final plays in Kraków. Kantor brought many of the plays back into currency, first in Poland and then internationally, including The Cuttlefish (1956) and The Water Hen (1969). Visual artist Paulina Olowska produced Witkiewicz's Mother at the Tate Modern in 2015.[17]
                </Paragraph>
                <Paragraph>
                    Films which have Witkiewicz as the subject include Tumor Witkacego 1985,[18] Mystification 2010 [19] and Witkacy and Malinowski: a cinematic séance in 23 scenes 2017.[20] Films based on his works include Ludiot i kalugericata 1968,[21]Farewell to Autumn 1990,[22] Insatiability 2003,[23]Madame Tutli-Putli 2007[24] and Nursery Rhyme of a Madman 2017.[25]
                </Paragraph>
                <Paragraph>
                    Witkiewicz's paintings and pastel drawings are in the collections of the National Museum, Warsaw,[26] the National Museum, Kraków, Museum of Literature, Warsaw and the Museum of Central Pomerania with 125 works in Słupsk Castle.[27] The Metropolitan Museum of Art[28] and Museum of Modern Art[29] in New York, and the Art Gallery of New South Wales,[30] Sydney hold important examples of his photography.
                </Paragraph>
                <Paragraph>
                    In the postwar period, People's Republic of Poland's Ministry of Culture decided to exhume Witkiewicz's body, move it to Zakopane, and give it a solemn funeral. This was carried out according to plan, though no one was allowed to open the coffin that had been delivered by the Soviet authorities.
                </Paragraph>
                <Paragraph>
                    On 26 November 1994, the Polish Ministry of Culture and Art ordered the exhumation of the presumed grave of Witkiewicz in Zakopane. Genetic tests on the remaining bones proved that the body had belonged to an unknown woman — a final absurdist joke, fifty years after the publication of Witkacy's last novel.[31]
                </Paragraph>
                <Section type="h2" text="Works 🎨" />
                <Section type="h3" text="Art philosophy" />
                <ul>
                    <li>
                        <b>Nowe formy w malarstwie</b>
                        {' '}
                        (1919), translated into English as New Forms in Painting and the Misunderstandings Arising Therefrom (in The Witkiewicz Reader, Quartet, 1993)
                    </li>
                </ul>
            </Column>
        </Flexbox>
    </div>
);

export default Homepage;
