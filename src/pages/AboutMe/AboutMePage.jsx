import React, { useEffect } from 'react';
import './AboutMePage.scss';
import HeaderSection from '../../components/headerSection/HeaderSection';

const AboutMePage = () => {
  useEffect(() => {
    const transition = document.querySelector('.container-transition');
    setTimeout(() => {
      transition.classList.remove('active');
    }, 100);
  }, []);

  return (
    <div className="container-about-me-page">
      <div className={'container-transition active'}></div>
      <HeaderSection />
      <h1>AboutMePage</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        repellat ea explicabo consequuntur fugit excepturi sed id tenetur
        mollitia impedit voluptate laudantium similique itaque voluptates
        expedita, pariatur nostrum modi quae, amet harum totam maiores optio
        consectetur. Placeat numquam totam ducimus non reiciendis earum ab odio
        fugit amet perspiciatis optio maxime dolor minima beatae, sequi
        similique quis quia. Adipisci illum eos atque magni voluptatem hic.
        Accusantium, suscipit reprehenderit soluta cumque odio beatae laudantium
        dignissimos minus? Vitae, porro nemo labore et in quas odio earum itaque
        consectetur iste illo placeat nulla architecto quis perferendis illum,
        expedita repellat est assumenda, nesciunt explicabo. Recusandae totam
        vel aliquam illum numquam neque asperiores, odio eum rem cumque,
        repellendus ipsum officiis vitae? Error consequuntur modi, eius, itaque
        incidunt, rem vero doloremque vitae molestias et eos dignissimos
        necessitatibus. Nostrum, velit! Laboriosam amet nemo culpa error fugiat
        adipisci recusandae quidem debitis nostrum ab? Numquam cum id
        consectetur inventore explicabo earum quasi, voluptates blanditiis iste
        facere porro saepe molestias? Quos explicabo quae quod ad enim optio
        eius deleniti dolorum! Aliquid accusantium dolores veritatis distinctio,
        nostrum repellat modi adipisci odit recusandae aperiam ducimus, nobis
        excepturi voluptatem inventore in? Vel quo at dolor! Aspernatur
        architecto ipsa reiciendis voluptate eaque dicta at animi, saepe velit
        qui odit est molestias ratione! Quaerat necessitatibus iste sequi
        consectetur ab repudiandae recusandae magni cupiditate fugiat, tempore
        voluptates molestias, eos ex. In dolores nam aspernatur ipsam
        praesentium placeat optio aperiam architecto eligendi laboriosam
        corrupti, omnis dolorum, eius ex, corporis eos nobis voluptatem quaerat
        eaque tempore molestiae! Eligendi, voluptatibus. Quaerat ducimus odit
        provident ratione id accusantium, praesentium mollitia molestias
        corrupti dolor omnis. Qui neque facilis nam rerum maxime quidem fugiat
        delectus, amet dolorem cupiditate reiciendis tempora molestias ducimus
        corporis autem iste rem voluptates quis aperiam facere in aliquid natus?
        Quibusdam praesentium ipsam tenetur ipsum earum, assumenda labore!
        Obcaecati dolorum ipsum voluptas facilis ipsam magnam ratione, minus
        eveniet magni unde quod totam dicta, ab nihil placeat nam ad amet fugit
        earum numquam deserunt quisquam laborum minima possimus! Nulla
        praesentium facere ex hic, consequatur libero quo natus, pariatur
        provident repellat doloremque in dicta! Minus inventore autem debitis
        obcaecati maiores commodi ex, consequatur similique quos facere dolore
        repellendus possimus nihil numquam! Beatae qui quas minima quo harum,
        est libero neque aspernatur quidem eius fugiat a tenetur consequatur
        dolorem molestias tempora saepe placeat, quibusdam maiores! Debitis, ut.
        Enim voluptatum, eligendi blanditiis ducimus id, dignissimos consequatur
        delectus iste possimus veritatis sunt! Corporis molestiae deleniti iusto
        esse saepe minima voluptatem quidem, voluptas inventore aliquam nulla
        incidunt quis laborum voluptatibus rem placeat recusandae illum debitis
        beatae veniam sequi. Delectus error in aut assumenda accusamus
        consequatur, libero qui enim expedita doloribus molestiae quaerat,
        officiis, eius eveniet voluptates mollitia reiciendis! A eveniet quis
        laudantium earum necessitatibus similique doloribus odit minus alias
        expedita aspernatur voluptatibus ratione labore, asperiores repellat.
        Neque veniam necessitatibus voluptate molestias aperiam quo doloremque.
        Dolor sapiente quisquam, neque consequuntur sequi odit natus est
        delectus veritatis quibusdam odio facilis ea. Aliquam laboriosam maiores
        illum inventore rem, quam, facilis incidunt molestiae assumenda enim ea
        hic at eveniet deserunt.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        repellat ea explicabo consequuntur fugit excepturi sed id tenetur
        mollitia impedit voluptate laudantium similique itaque voluptates
        expedita, pariatur nostrum modi quae, amet harum totam maiores optio
        consectetur. Placeat numquam totam ducimus non reiciendis earum ab odio
        fugit amet perspiciatis optio maxime dolor minima beatae, sequi
        similique quis quia. Adipisci illum eos atque magni voluptatem hic.
        Accusantium, suscipit reprehenderit soluta cumque odio beatae laudantium
        dignissimos minus? Vitae, porro nemo labore et in quas odio earum itaque
        consectetur iste illo placeat nulla architecto quis perferendis illum,
        expedita repellat est assumenda, nesciunt explicabo. Recusandae totam
        vel aliquam illum numquam neque asperiores, odio eum rem cumque,
        repellendus ipsum officiis vitae? Error consequuntur modi, eius, itaque
        incidunt, rem vero doloremque vitae molestias et eos dignissimos
        necessitatibus. Nostrum, velit! Laboriosam amet nemo culpa error fugiat
        adipisci recusandae quidem debitis nostrum ab? Numquam cum id
        consectetur inventore explicabo earum quasi, voluptates blanditiis iste
        facere porro saepe molestias? Quos explicabo quae quod ad enim optio
        eius deleniti dolorum! Aliquid accusantium dolores veritatis distinctio,
        nostrum repellat modi adipisci odit recusandae aperiam ducimus, nobis
        excepturi voluptatem inventore in? Vel quo at dolor! Aspernatur
        architecto ipsa reiciendis voluptate eaque dicta at animi, saepe velit
        qui odit est molestias ratione! Quaerat necessitatibus iste sequi
        consectetur ab repudiandae recusandae magni cupiditate fugiat, tempore
        voluptates molestias, eos ex. In dolores nam aspernatur ipsam
        praesentium placeat optio aperiam architecto eligendi laboriosam
        corrupti, omnis dolorum, eius ex, corporis eos nobis voluptatem quaerat
        eaque tempore molestiae! Eligendi, voluptatibus. Quaerat ducimus odit
        provident ratione id accusantium, praesentium mollitia molestias
        corrupti dolor omnis. Qui neque facilis nam rerum maxime quidem fugiat
        delectus, amet dolorem cupiditate reiciendis tempora molestias ducimus
        corporis autem iste rem voluptates quis aperiam facere in aliquid natus?
        Quibusdam praesentium ipsam tenetur ipsum earum, assumenda labore!
        Obcaecati dolorum ipsum voluptas facilis ipsam magnam ratione, minus
        eveniet magni unde quod totam dicta, ab nihil placeat nam ad amet fugit
        earum numquam deserunt quisquam laborum minima possimus! Nulla
        praesentium facere ex hic, consequatur libero quo natus, pariatur
        provident repellat doloremque in dicta! Minus inventore autem debitis
        obcaecati maiores commodi ex, consequatur similique quos facere dolore
        repellendus possimus nihil numquam! Beatae qui quas minima quo harum,
        est libero neque aspernatur quidem eius fugiat a tenetur consequatur
        dolorem molestias tempora saepe placeat, quibusdam maiores! Debitis, ut.
        Enim voluptatum, eligendi blanditiis ducimus id, dignissimos consequatur
        delectus iste possimus veritatis sunt! Corporis molestiae deleniti iusto
        esse saepe minima voluptatem quidem, voluptas inventore aliquam nulla
        incidunt quis laborum voluptatibus rem placeat recusandae illum debitis
        beatae veniam sequi. Delectus error in aut assumenda accusamus
        consequatur, libero qui enim expedita doloribus molestiae quaerat,
        officiis, eius eveniet voluptates mollitia reiciendis! A eveniet quis
        laudantium earum necessitatibus similique doloribus odit minus alias
        expedita aspernatur voluptatibus ratione labore, asperiores repellat.
        Neque veniam necessitatibus voluptate molestias aperiam quo doloremque.
        Dolor sapiente quisquam, neque consequuntur sequi odit natus est
        delectus veritatis quibusdam odio facilis ea. Aliquam laboriosam maiores
        illum inventore rem, quam, facilis incidunt molestiae assumenda enim ea
        hic at eveniet deserunt.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
        repellat ea explicabo consequuntur fugit excepturi sed id tenetur
        mollitia impedit voluptate laudantium similique itaque voluptates
        expedita, pariatur nostrum modi quae, amet harum totam maiores optio
        consectetur. Placeat numquam totam ducimus non reiciendis earum ab odio
        fugit amet perspiciatis optio maxime dolor minima beatae, sequi
        similique quis quia. Adipisci illum eos atque magni voluptatem hic.
        Accusantium, suscipit reprehenderit soluta cumque odio beatae laudantium
        dignissimos minus? Vitae, porro nemo labore et in quas odio earum itaque
        consectetur iste illo placeat nulla architecto quis perferendis illum,
        expedita repellat est assumenda, nesciunt explicabo. Recusandae totam
        vel aliquam illum numquam neque asperiores, odio eum rem cumque,
        repellendus ipsum officiis vitae? Error consequuntur modi, eius, itaque
        incidunt, rem vero doloremque vitae molestias et eos dignissimos
        necessitatibus. Nostrum, velit! Laboriosam amet nemo culpa error fugiat
        adipisci recusandae quidem debitis nostrum ab? Numquam cum id
        consectetur inventore explicabo earum quasi, voluptates blanditiis iste
        facere porro saepe molestias? Quos explicabo quae quod ad enim optio
        eius deleniti dolorum! Aliquid accusantium dolores veritatis distinctio,
        nostrum repellat modi adipisci odit recusandae aperiam ducimus, nobis
        excepturi voluptatem inventore in? Vel quo at dolor! Aspernatur
        architecto ipsa reiciendis voluptate eaque dicta at animi, saepe velit
        qui odit est molestias ratione! Quaerat necessitatibus iste sequi
        consectetur ab repudiandae recusandae magni cupiditate fugiat, tempore
        voluptates molestias, eos ex. In dolores nam aspernatur ipsam
        praesentium placeat optio aperiam architecto eligendi laboriosam
        corrupti, omnis dolorum, eius ex, corporis eos nobis voluptatem quaerat
        eaque tempore molestiae! Eligendi, voluptatibus. Quaerat ducimus odit
        provident ratione id accusantium, praesentium mollitia molestias
        corrupti dolor omnis. Qui neque facilis nam rerum maxime quidem fugiat
        delectus, amet dolorem cupiditate reiciendis tempora molestias ducimus
        corporis autem iste rem voluptates quis aperiam facere in aliquid natus?
        Quibusdam praesentium ipsam tenetur ipsum earum, assumenda labore!
        Obcaecati dolorum ipsum voluptas facilis ipsam magnam ratione, minus
        eveniet magni unde quod totam dicta, ab nihil placeat nam ad amet fugit
        earum numquam deserunt quisquam laborum minima possimus! Nulla
        praesentium facere ex hic, consequatur libero quo natus, pariatur
        provident repellat doloremque in dicta! Minus inventore autem debitis
        obcaecati maiores commodi ex, consequatur similique quos facere dolore
        repellendus possimus nihil numquam! Beatae qui quas minima quo harum,
        est libero neque aspernatur quidem eius fugiat a tenetur consequatur
        dolorem molestias tempora saepe placeat, quibusdam maiores! Debitis, ut.
        Enim voluptatum, eligendi blanditiis ducimus id, dignissimos consequatur
        delectus iste possimus veritatis sunt! Corporis molestiae deleniti iusto
        esse saepe minima voluptatem quidem, voluptas inventore aliquam nulla
        incidunt quis laborum voluptatibus rem placeat recusandae illum debitis
        beatae veniam sequi. Delectus error in aut assumenda accusamus
        consequatur, libero qui enim expedita doloribus molestiae quaerat,
        officiis, eius eveniet voluptates mollitia reiciendis! A eveniet quis
        laudantium earum necessitatibus similique doloribus odit minus alias
        expedita aspernatur voluptatibus ratione labore, asperiores repellat.
        Neque veniam necessitatibus voluptate molestias aperiam quo doloremque.
        Dolor sapiente quisquam, neque consequuntur sequi odit natus est
        delectus veritatis quibusdam odio facilis ea. Aliquam laboriosam maiores
        illum inventore rem, quam, facilis incidunt molestiae assumenda enim ea
        hic at eveniet deserunt.
      </p>
    </div>
  );
};

export default AboutMePage;
