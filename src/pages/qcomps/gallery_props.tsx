import { Scientist } from "@/types/gallery";

function ScientistProfile({ name, imageId, profession, awards, discovery }: Scientist) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={imageId}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: </b>
          {awards}
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <ScientistProfile
        name="Maria Skłodowska-Curie"
        imageId="https://i.imgur.com/szV5sdGs.jpg"
        profession="physicist and chemist"
        awards="Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        discovery="polonium (element)"
      />
      <ScientistProfile
        name="Katsuko Saruhashi"
        imageId="https://i.imgur.com/YfeOqp2s.jpg"
        profession="geochemist"
        awards="Miyake Prize for geochemistry, Tanaka Prize"
        discovery="Saruhashi's Table"
      />
    </div>
  );
}
