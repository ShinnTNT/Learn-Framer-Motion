import { motion, useScroll } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <motion.div
        style={{
          height: "10px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "red",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
          transition: "linear",
        }}
      />
      <div
        style={{
          padding: "20px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat a sint
        ipsum officiis odit, repellat minus suscipit provident voluptatem soluta
        nobis dolorum unde? Unde temporibus ut rem doloribus cum asperiores
        impedit earum, voluptatum atque, assumenda necessitatibus ab nulla quis
        dicta quidem itaque ea excepturi nemo illo veniam accusamus quaerat
        perspiciatis alias veritatis. Nesciunt eligendi modi provident a. Dicta
        soluta dolorum voluptates molestiae quae dolorem cupiditate similique
        accusantium doloribus nihil ex sed est distinctio illo nemo atque
        numquam aut consequuntur quasi expedita, laborum debitis magni
        veritatis! Aliquam quam quis voluptatum quod debitis molestias quos esse
        sint assumenda necessitatibus commodi repudiandae perferendis iure
        eligendi itaque laboriosam architecto velit reiciendis adipisci odit
        dolores, aliquid quaerat. Ullam vitae aliquam veniam dolor, accusamus
        cumque beatae exercitationem ducimus cum quis quaerat modi natus
        quisquam qui accusantium autem facilis et minus illo a quas similique?
        Tempora tenetur hic cumque pariatur quas quidem est, fugit distinctio
        nihil nobis? Necessitatibus harum eaque totam sunt officiis voluptatem,
        dolores possimus? Obcaecati deleniti ab dolorum quas, delectus placeat
        eum earum iusto, adipisci eos illum voluptate sit culpa quam voluptas
        labore iste et! Corrupti necessitatibus libero perspiciatis, quae quis
        odit soluta nihil facere numquam architecto rem totam, omnis earum
        voluptatum nesciunt enim. Beatae voluptatem quia placeat veritatis, non
        laudantium ullam error similique quae sunt tempore, facilis veniam
        doloribus consectetur temporibus voluptatibus, labore cumque laborum
        explicabo accusamus aliquam sapiente blanditiis. Tenetur libero eligendi
        sunt vitae reprehenderit, reiciendis sequi eius aperiam quae in sapiente
        dolorem ullam fuga culpa saepe asperiores perferendis tempora error
        neque optio omnis, ad quisquam consequuntur. Sed deserunt provident ut
        ipsa voluptas explicabo architecto a molestias, exercitationem quidem,
        soluta excepturi harum. Voluptates iusto, est sint ut incidunt aperiam
        corporis similique. Minus odio esse nemo sapiente eveniet blanditiis
        explicabo expedita. Quaerat obcaecati accusantium unde, illo suscipit
        possimus fugiat quo voluptatum molestias, et adipisci magni consectetur
        natus autem necessitatibus reprehenderit tempora id sed recusandae quis
        doloremque. Illum animi fugit id perferendis quasi ducimus a saepe error
        ex doloremque quo cupiditate et quos, amet sequi facilis rem eos vitae
        delectus iure labore magni fuga ipsum. Provident, dolorum beatae vero
        dolor laborum delectus. Doloremque ullam qui in architecto pariatur
        voluptatum ipsa nostrum voluptatem est ad perferendis quas at error
        doloribus neque dicta, blanditiis amet, temporibus distinctio, quam quo!
        Deleniti, error soluta dolorem necessitatibus sit aliquam! Sed
        voluptatibus repellat, consequatur pariatur nobis vero deserunt iure
        totam vel, impedit, veniam distinctio ut nemo? Voluptatem numquam amet
        quod iste exercitationem laboriosam consequuntur deleniti expedita
        quibusdam dolor porro itaque illo aut autem illum, rem reprehenderit
        architecto repellendus corrupti adipisci officia ipsam debitis
        accusantium ipsa. Animi nemo nihil voluptate facere iusto minima
        voluptatibus quisquam blanditiis culpa non? Sequi suscipit eligendi
        dignissimos voluptatem ullam! Qui placeat dignissimos rerum rem! Sequi,
        ea quas, odio amet reprehenderit nisi dolorum ipsa quia provident atque
        aspernatur accusantium enim maiores laborum dignissimos quibusdam
        molestiae placeat quod consectetur illo facere nostrum dicta, dolore
        sapiente. Non, at nam alias repudiandae necessitatibus odit inventore ab
        debitis quos distinctio adipisci dolorum possimus! Quos reprehenderit
        dolorum, tenetur minus, nostrum aspernatur dignissimos sapiente nemo
        totam laudantium doloremque? Nam unde commodi harum! Soluta modi eos
        eveniet odio quia repellendus nemo vitae temporibus quisquam quis eius
        sunt repellat cupiditate dolor, facilis maxime nostrum? Incidunt iure
        atque doloribus soluta quos vel nesciunt suscipit iste eligendi id
        similique doloremque nulla sit, cumque rem officiis, aperiam blanditiis
        animi, perspiciatis modi. Modi molestiae nam officiis est consequatur
        odio dolor totam tempore ut quidem in voluptates saepe illo expedita,
        provident quam autem natus. Neque quae labore facere ex assumenda
        debitis provident unde accusantium quod doloribus numquam expedita,
        officia, distinctio quam? Distinctio eligendi doloremque ipsa unde
        cumque molestias dolorem delectus, repellat ratione consequatur ullam
        eaque repudiandae vitae sunt temporibus optio exercitationem? Iusto
        repudiandae earum cum voluptatum placeat id vel excepturi expedita
        repellat amet reiciendis delectus nisi, nesciunt voluptatem a tempore
        recusandae! Reiciendis numquam, odit et harum perspiciatis adipisci
        assumenda odio dolores voluptatibus? Eaque dolorem repudiandae natus,
        reprehenderit nobis veritatis, id tempore, qui mollitia at harum. Magni
        aliquam et expedita at temporibus quod animi ipsa consectetur
        accusantium consequuntur delectus neque tempora voluptate possimus
        maiores nostrum ab itaque unde, tempore aperiam dolor praesentium
        asperiores! Perferendis soluta tempora sequi ut quas natus laborum modi
        ipsum in accusamus harum, voluptatem repellendus laudantium. Architecto,
        tempora, molestiae perspiciatis sapiente explicabo aperiam alias,
        debitis quidem minima porro ratione est. Iure quas obcaecati odio quam
        tenetur repellat sed harum eius ratione voluptas natus consequatur
        expedita cumque suscipit quod rerum repudiandae nobis dicta facere
        corrupti, ipsa nam quibusdam voluptatum. Deserunt vero veniam sed error
        hic quae inventore officiis molestiae alias ea nemo distinctio fuga
        quisquam cum consequuntur, qui soluta enim optio reiciendis amet
        voluptate delectus, quibusdam ad totam? Sint dignissimos dolore sed
        reiciendis magnam praesentium blanditiis odio veniam voluptas aliquid
        vitae repudiandae totam molestiae quas neque maxime reprehenderit,
        obcaecati ducimus unde. Quisquam earum quam ducimus, officia expedita
        eaque, ullam sunt veritatis in officiis explicabo consequatur modi ipsum
        harum maxime sint quos. Repellendus incidunt voluptatum eos iure sit
        voluptates cumque. Suscipit eaque odio dignissimos necessitatibus
        voluptas corporis pariatur ea modi doloremque accusantium. Perferendis
        rerum modi soluta voluptatem id, error, eligendi laudantium voluptatibus
        ullam blanditiis exercitationem laboriosam nisi sed! Cumque iure porro
        nam totam consequatur voluptas alias esse ullam magni odio. Unde itaque
        sapiente officia placeat et tenetur sequi fuga velit magnam? Asperiores
        perferendis repellat aut atque commodi totam sint qui delectus officiis
        exercitationem ea recusandae quae, illo, ex mollitia. Consequatur,
        veritatis a! Molestiae, quaerat hic. Maxime explicabo officiis voluptate
        cupiditate temporibus libero repellat magnam voluptatem. Minima, eos
        eligendi! Possimus blanditiis nesciunt adipisci dignissimos consequuntur
        animi optio soluta ab, perspiciatis expedita reiciendis quam, velit
        deserunt maxime asperiores iusto voluptate, placeat sapiente qui esse
        temporibus. Quisquam reprehenderit nisi perferendis quaerat laboriosam
        repellendus nemo, dicta quos vitae sequi veritatis possimus iste!
        Necessitatibus dolor velit delectus suscipit, totam at corporis deleniti
        fuga explicabo consequatur vitae vel ducimus aperiam porro voluptate,
        quos consequuntur sapiente omnis modi dicta id molestias libero dolorem
        excepturi! Inventore iste vel quis labore quidem fugiat asperiores harum
        maiores? Quam omnis alias similique, illum inventore assumenda qui vel
        ut asperiores quos deleniti? Veniam beatae provident minus rerum
        accusantium numquam tenetur iure, explicabo in dolore? A, sint, nulla
        facere optio est odit saepe earum porro quae eius delectus expedita
        ratione repellat modi quia amet? Eligendi, numquam. Error doloremque
        accusantium maxime, nobis nulla magnam dicta. Omnis voluptas dignissimos
        veniam neque pariatur illum provident, distinctio nihil voluptates nulla
        eos enim? Tenetur fugiat modi id vitae dicta cum officiis praesentium
        ad, aliquid maiores illum dolores soluta expedita minus illo labore
        tempore eligendi voluptates ullam totam explicabo cupiditate provident,
        sit repudiandae? Voluptates doloribus iste neque velit ipsum ad aliquid
        consequuntur, nulla a, ut obcaecati sint voluptatem ipsa possimus id
        officia quae! Mollitia facere debitis quam facilis voluptatibus omnis
        alias ut, et rerum perspiciatis, error ipsa veniam quibusdam adipisci
        laboriosam animi, natus sed sunt cumque eos. Aperiam porro delectus
        dolores beatae veniam, pariatur adipisci sint ullam distinctio autem ex
        molestias laudantium perferendis, laboriosam explicabo maiores magnam.
        Ex, at. Repudiandae consequatur tempora cum iusto nostrum veniam quia
        accusantium ipsam aliquam doloribus quis explicabo quos at placeat error
        suscipit debitis rerum libero blanditiis ipsa, porro voluptates,
        voluptate aspernatur. Quis error mollitia veniam animi natus quae,
        dolorem nostrum repudiandae maiores ipsam voluptas labore doloremque
        cupiditate! Eaque, impedit ratione. Illo iste nam tenetur impedit iure.
        Architecto nihil animi quos soluta! Necessitatibus error debitis facilis
        maxime est voluptate eveniet veniam possimus accusantium quod? Enim
        maxime minima aliquam suscipit iure laudantium dolores velit possimus
        repudiandae temporibus molestias ab ut ad placeat quis porro soluta,
        earum minus id vero! Enim, explicabo? Ullam neque id deleniti temporibus
        maxime excepturi, facilis voluptates, rem repudiandae deserunt dolore
        inventore soluta quidem impedit voluptas delectus vel consequuntur
        corrupti aut ut. Autem accusantium excepturi corporis vero quibusdam
        nulla maxime ab earum quod iusto? Ut, qui. Distinctio quos tenetur
        soluta, deserunt quasi, alias similique debitis voluptas facilis eos
        adipisci ducimus sunt cupiditate fugiat et! Ullam, sed ipsam? Quam
        officiis nisi neque fugit iusto eligendi! Est, placeat. Distinctio
        suscipit corrupti optio adipisci cumque soluta, reprehenderit voluptatum
        accusantium quos eligendi, nulla totam odio, mollitia omnis eos enim
        ratione quae saepe vero nesciunt beatae. Modi cupiditate laboriosam
        natus dicta rerum amet blanditiis, tempore error iure ea inventore id!
        Error omnis corporis dolore possimus voluptate iure similique mollitia
        est provident quisquam vitae quis nobis, sed libero ex assumenda aliquam
        optio neque corrupti qui illum! Perspiciatis voluptate maxime, est eos
        temporibus sed et ducimus ullam illo, error modi eveniet eligendi
        voluptatibus obcaecati iure numquam facere nesciunt labore cumque
        accusamus harum similique dolore aut. Dolorum veniam excepturi magni,
        nostrum dolores, officiis, error maiores sunt repudiandae at modi
        dignissimos! Beatae dolor excepturi quae quos incidunt. Voluptas
        suscipit ducimus corporis distinctio ad vero nisi beatae eveniet
        similique quibusdam sed vel atque ea obcaecati, earum quos rerum dicta
        perspiciatis enim nobis hic! Porro voluptatem eaque ad, mollitia nam
        exercitationem, at eum ab earum beatae labore repellat iusto molestiae
        cum numquam repellendus recusandae deserunt ratione quis nobis
        consequatur deleniti adipisci? Quae, vero eaque? Reprehenderit ad,
        veritatis vitae sequi perferendis ducimus cumque, blanditiis voluptates
        odio ex error ullam reiciendis praesentium earum enim! Est, laboriosam
        totam! Natus, sequi quaerat, earum vero ipsum excepturi temporibus in
        aspernatur recusandae magni praesentium. Mollitia aut provident nostrum
        perferendis quas fugiat ut. Soluta fugiat laboriosam repellat, magnam
        inventore eos quae, veritatis sequi nostrum laudantium quod velit
        recusandae sint necessitatibus. Deserunt culpa, assumenda magni quidem
        sint itaque distinctio incidunt non sapiente aliquid velit officia quod
        autem nihil, rem iste quo ex. Vel, cupiditate magnam. Dicta assumenda ad
        saepe, soluta repellendus enim ipsum illo sapiente qui, tenetur ex
        cupiditate ipsam totam quae reiciendis nihil voluptates atque. Commodi
        ab facilis expedita possimus qui animi similique nisi dicta, quisquam
        doloribus labore dolor consectetur aliquam ipsam quas voluptas, illum
        nihil at hic quae enim cupiditate voluptates! Eius perspiciatis optio et
        dolor dolorum iste doloremque nemo reprehenderit, assumenda mollitia!
        Laboriosam, cupiditate? Tempora qui aliquid magnam excepturi
        reprehenderit, voluptatem nostrum accusamus quae velit sapiente,
        obcaecati cumque aperiam, rerum sed. Repellendus eveniet consequuntur
        architecto eligendi, recusandae possimus sed optio voluptate ex a fugit
        ea, minus dolore sapiente quia quasi amet? Eveniet at totam inventore
        maiores. Facere, tempora exercitationem perferendis animi officiis iste
        cupiditate iure, veniam corrupti autem perspiciatis vel aliquid odit
        saepe, ex illum dolorem. Dignissimos illum deleniti quisquam voluptatem.
        Numquam saepe quas dolorem aut cupiditate obcaecati doloremque modi
        dolorum odit ex debitis error amet nulla, quae non officiis veritatis
        tempora, veniam, maxime nostrum! Voluptatem commodi eveniet natus fuga
        magni nostrum minus necessitatibus earum, facilis modi! Error sequi ipsa
        laboriosam assumenda doloremque? Et maiores aperiam, labore voluptatem
        deserunt, a illo animi neque mollitia sequi tenetur numquam minima
        nulla, eius quidem deleniti molestiae! At, dolor! Maiores rerum at
        molestiae suscipit ut aspernatur, eos perferendis! Dolorem pariatur in
        minus quia ex facilis deserunt vitae. Vitae quibusdam, cum voluptates
        nihil eligendi accusantium quod, dicta rem blanditiis odit, doloribus
        voluptas autem. Sapiente, tempora deleniti necessitatibus recusandae,
        veritatis repellendus non tenetur molestiae deserunt natus quaerat
        asperiores incidunt quis sequi. Ipsam aliquam ab, illum amet ut ducimus
        nisi accusantium enim atque aperiam cupiditate! Ullam pariatur vitae
        sunt error quibusdam ut deserunt velit necessitatibus quos nemo?
        Tenetur, fugit debitis sapiente corrupti, dolor id expedita natus
        blanditiis, animi aspernatur tempore. Beatae labore quas blanditiis
        adipisci perspiciatis, vel, cumque natus, rerum quisquam nobis et
        nostrum. Deserunt natus nihil iusto doloremque totam inventore ea odio
        iure, reprehenderit obcaecati blanditiis beatae at. Nulla minus illum,
        fugiat doloribus nisi eligendi ipsum, dignissimos cupiditate atque
        assumenda vel, consectetur ea voluptatem sed a officia molestiae hic ex
        suscipit dolorem pariatur odit. Laudantium, temporibus illo eligendi
        distinctio iusto quam dignissimos reprehenderit porro amet impedit nulla
        officiis asperiores ex quos tempora pariatur eius minus cum, voluptatem
        aperiam dolore esse. Nesciunt, quas? Facilis voluptate illum ullam eos?
        Laborum sunt adipisci cum consectetur in, illo fugit reiciendis sequi,
        obcaecati fugiat rem rerum quia saepe quae blanditiis sed a, veritatis
        et voluptas hic aut asperiores nesciunt quis dolores. Maiores alias,
        quos dolorem maxime sunt ipsum facere ipsa in quaerat? Consequatur alias
        vitae quasi repellat minima totam magnam facere ab molestiae? Cupiditate
        maiores distinctio earum quas quae libero mollitia nihil sapiente ut
        facere. Animi quibusdam neque quidem harum.
      </div>
    </div>
  );
};

export default Scroll;
