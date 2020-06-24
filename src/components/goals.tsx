import * as React from "react";
import { Image } from "./image";
import { EventTitle } from "./eventtitle";
import styled from "@emotion/styled";

const GlobalDiv = styled.div`
  max-width: 70%;
  margin: auto;
`;

const Title = styled.h1``;

const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  padding: 1rem;
`;

const Event = styled.div`
  display: flex;
  flex-direction: column;
`;

const EventContent = styled.div``;
const EventText = styled.p``;

const GoalsText = styled.p``;

// Block-Element so that the logo of the respective image can be easily constrained and styled
const EventImage = styled.div``;

export const Goals = () => (
  <GlobalDiv>
    <Title>Events:</Title>
    <EventList>
      <Event>
        <EventImage>
          <Image label="Hackaburg" src="images/hackaburg.svg" />
        </EventImage>
        <EventContent>
          <EventTitle name="Hackaburg" link="https://hackaburg.de" />
          <EventText>
            Wir lieben Hackathons und versuchen deshalb, mindestens einmal im
            Jahr unseren überregional bekannten Hackathon “Hackaburg”
            durchzuführen.
          </EventText>
        </EventContent>
      </Event>
      <Event>
        <EventImage>
          <Image label="Hackaburg School" src="images/hb-school.svg" />
        </EventImage>
        <EventContent>
          <EventTitle name="Hackaburg School" />
          <EventText>
            Informatik ist nicht das beliebteste Schulfach, das wissen wir.
            Deshalb führen wir mit dem Mini “Hackaburg School” Hackathon
            interessierte Schüler spielerisch und hands-on in die Welt der
            praktischen IT ein. Bislang konnten wir hierfür die FOSBOS und das
            Piendl Gymnasium gewinnen. Informatik, sowie Medienkompetenz werden
            in unserer Gesellschaft immer wichtiger, und Schulen “sind nicht
            agil genug um mitzuhalten”.
          </EventText>
        </EventContent>
      </Event>
      <Event>
        <EventImage>
          <Image label="Stammtisch" src="images/hb-stammtisch.svg" />
        </EventImage>
        <EventContent>
          <EventTitle name="Stammtisch" />
          <EventText>
            Kellerkind war gestern: Einmal im Monat treffen wir uns zum
            Hackaburg Stammtisch, bei dem hochkarätige Speaker über die neuesten
            Entwicklungen und Technologien informieren. Alle sind willkommen,
            egal ob technik-affin oder Laie.
          </EventText>
        </EventContent>
      </Event>
    </EventList>
    <Title>Goals:</Title>
    <GoalsText></GoalsText>
  </GlobalDiv>
);

/*
Stichpunkte:

Deshalb ...

Fake News sind gefährlich. Wir haben uns deshalb insbesondere der Förderung von Forschung, Entwicklung und Aufklärung im Bereich der informationstechnologien gewidmet.
Du musst nicht Bill Gates sein, um Computer richtig zu verstehen: Deshalb darf die Allgemeinbildung und Förderung der Bevölkerung im Umgang mit neuen Technologien nicht zu kurz kommen.

Local Heroes statt Silicon Valley: Wir fördern universitäre Leistungen im Bereich der MINT-Fächer und unterstützen durch unser Netzwerk an lokalen Firmen auch gerne bei der Stellensuche.



Text:

Unser Ziel ist es Jugendliche sowie bereits Studierende an den Bereich der Informationstechnologien mit Spaß heranzuführen bzw. das Wissen zu erweitern.

Es soll auch die Angst/Vorurteile gegenüber Programmieren genommen werden, dies geschieht z.B für Schüler durch einen erleichterten Einstieg bei der Hackaburg School. Hierbei stehen Mentoren bei Fragen aller Art zur Seite, sodass ein Lern/Programmier-Erfolg ohne Frustration für die Schüler erfolgt.

(Einem Computer ist egal, ob du männlich, weiblich oder nicht binär bist oder welche Hautfarbe du hast. Wir legen deshalb besonders Wert darauf, ein inklusives und unterstützendes Umfeld zu bieten, in dem jede noch so verrückte Idee zur Sprache kommen soll. Code kann unheimlich wirken, gerade am Anfang der spannenden Reise in die Welt der IT. Das wissen wir. Deshalb versuchen wir beispielsweise durch Hackaburg School…)

Wir versuchen jedes Jahr die Hackaburg noch ein Stückchen besser zu machen, und so den Studenten eine optimale Möglichkeit zu geben ihr Wissen und Können zu erweitern-denn mit Spaß lernt man am besten.

Die Hackaburg selbst soll auch neue Teams mit Personen aus verschiedensten Herkünften und Stärken zusammenführen, hierbei freut es uns besonders wenn sich Freundschaften oder Kooperationen in dieser Atmosphäre bilden.

Ebenfalls soll der Verein selbst bzw. vom Verein ausgeführte Veranstaltungen als Austauschplattform für Diskussionen, Vorträge, oder auch neuen Ideen im Bereich der Informatik/Informationstechnologien dienen.

Auch die Volksbildung, egal ob bei jung oder alt, im Bereich der neuen Technologien z.b KI möchten wir fördern, da diese In Zukunft große Auswirkungen auf unser alltägliches Leben haben wird.

Die genauen Inhalte unserer Satzung sind hier nachzulesen.
*/
