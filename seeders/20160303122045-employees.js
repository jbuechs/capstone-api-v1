module.exports = {
  up: function (queryInterface, Sequelize) {
    'use strict';
    return queryInterface.bulkInsert('employees', 
      [
        {
          "id":1,
          "name":"Aisha Mathews",
          "position":"Early Career Programs Recruiter",
          "email":"amathews@expedia.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/aishamathews",
          "image":"",
          "companyId":1
        },
        {
          "id":2,
          "name":"Nasreen Abdulijaleel",
          "position":"Technology Director",
          "email":"nabduljaleel@expedia.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/nasreenabduljaleel",
          "image":"",
          "companyId":1
        },
        {
          "id":3,
          "name":"Kelsey Foley",
          "position":"Sr. SDET/Software Engineer",
          "email":"kelsey@moz.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/kelsey-anderson-foley-914b751",
          "image":"",
          "companyId":2
        },
        {
          "id":4,
          "name":"David Weiser",
          "position":"Software Engneer",
          "email":"davidann@moz.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/david-weiser-238b6223",
          "image":"",
          "companyId":2
        },
        {
          "id":5,
          "name":"Adam Edwards",
          "position":"Engineering General Manager",
          "email":"adamed@chef.io",
          "twitter":"@adamedx",
          "linked_in_url":"https://www.linkedin.com/in/adamedx",
          "image":"",
          "companyId":6
        },
        {
          "id":6,
          "name":"Wendy McIntosh",
          "position":"Director; Global Talent/Recruiting",
          "email":"mcintoshw@getchef.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/wendymcintosh1",
          "image":"",
          "companyId":6
        },
        {
          "id":7,
          "name":"Davida Marion",
          "position":"Software Development Engineer",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/davidamarion",
          "image":"",
          "companyId":6
        },
        {
          "id":8,
          "name":"Naomi Choi",
          "position":"HR Program Manager",
          "email":"naomi.choi@isilon.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/choinaomi",
          "image":"",
          "companyId":7
        },
        {
          "id":9,
          "name":"Joe Goldberg",
          "position":"Customer Engineering Team Lead",
          "email":"joe@energysavvy.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/joegoldbergtheninja",
          "image":"",
          "companyId":9
        },
        {
          "id":10,
          "name":"Robin Clowers",
          "position":"Lead Developer",
          "email":"robin@substantial.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/robinclowers",
          "image":"",
          "companyId":10
        },
        {
          "id":11,
          "name":"Aaron Jenson",
          "position":"Lead Developer",
          "email":"aaron@substantial.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/aaronjensen",
          "image":"",
          "companyId":10
        },
        {
          "id":12,
          "name":"Eleni Adams",
          "position":"Vice President Operations",
          "email":"eleni@substantial.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/eleni-adams-36299969",
          "image":"",
          "companyId":10
        },
        {
          "id":13,
          "name":"Carol Lin",
          "position":"Senior Development Manager",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/carollin",
          "image":"",
          "companyId":12
        },
        {
          "id":14,
          "name":"Maddie Harris",
          "position":"SDE",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/madeline-harris-71794724",
          "image":"",
          "companyId":12
        },
        {
          "id":15,
          "name":"Liz Symes",
          "position":"University Recruiting Program Manager",
          "email":"lizs@zillow.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/lizsymes",
          "image":"",
          "companyId":12
        },
        {
          "id":16,
          "name":"Alan Chappell",
          "position":"Senior Development Engineer",
          "email":"alan.chappell@pnnl.gov",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/alan-chappell-6721bb",
          "image":"",
          "companyId":14
        },
        {
          "id":17,
          "name":"William Smith",
          "position":"Scientist Engineer 3",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/tmyk4wsmith",
          "image":"",
          "companyId":14
        },
        {
          "id":18,
          "name":"Gordon Brown",
          "position":"Director of Engineering",
          "email":"gordon.brown@redfin.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/gomfa",
          "image":"",
          "companyId":15
        },
        {
          "id":19,
          "name":"Sarah Fisher",
          "position":"Human Resources: Campus Recruiting",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/sarah-fisher-b823a215",
          "image":"",
          "companyId":null
        },
        {
          "id":20,
          "name":"Trevor Smith",
          "position":"Brand Specialist",
          "email":"trevsmit@amazon.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/trevor-smith-30456431",
          "image":"",
          "companyId":16
        },
        {
          "id":21,
          "name":"Melissa Mackie",
          "position":"Diversity Recruiting Program Manager",
          "email":"mackiem@amazon.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/melissamackie",
          "image":"",
          "companyId":16
        },
        {
          "id":22,
          "name":"Joon Chuah",
          "position":"Software Development Engineer",
          "email":"jhchuah@amazon.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/joon-hao-chuah-279b427",
          "image":"",
          "companyId":16
        },
        {
          "id":23,
          "name":"Arielle Allen",
          "position":"Technical IT Manager",
          "email":"",
          "twitter":"@AsquaredNicole",
          "linked_in_url":"https://www.linkedin.com/in/arielle-allen-16367948",
          "image":"arielle_allen.jpg",
          "companyId":17
        },
        {
          "id":24,
          "name":"Rob Gruhl",
          "position":"Senior Technical Program & Product Manager, Personalization",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/rob-gruhl-388a832",
          "image":"rob_gruhl.jpg",
          "companyId":17
        },
        {
          "id":25,
          "name":"Gina Schmalzle",
          "position":"Data Scientist",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/gina-schmalzle-23408a13",
          "image":"gina.jpg",
          "companyId":17
        },
        {
          "id":26,
          "name":"Khyati Vyas",
          "position":"Senior Technical Product Manager",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/vyaskv",
          "image":"khyati.jpg",
          "companyId":17
        },
        {
          "id":27,
          "name":"Karim Meghji",
          "position":"Head of Product",
          "email":"karim.meghji@booking.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/kmeghji",
          "image":"",
          "companyId":19
        },
        {
          "id":28,
          "name":"Colleen Briant",
          "position":"",
          "email":"colleen.briant@booking.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/colleen-briant-9517701b",
          "image":"",
          "companyId":19
        },
        {
          "id":29,
          "name":"Nicolette Graham",
          "position":"TM Programs Coordinator",
          "email":"Nicolette.Graham@concur.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/nicolettegraham",
          "image":"",
          "companyId":20
        },
        {
          "id":30,
          "name":"Justin Kramer",
          "position":"Senior Director of Development, Mobile",
          "email":"Justin.Kramer@concur.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/justin-kramer-30691b2",
          "image":"",
          "companyId":20
        },
        {
          "id":31,
          "name":"Angela Bultemeier",
          "position":"Vice President of Product Development",
          "email":"Angela.Bultemeier@envestnet.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/angela-bultemeier-57809a1",
          "image":"",
          "companyId":21
        },
        {
          "id":32,
          "name":"Joel Nethery",
          "position":"HR Coordinator",
          "email":"Joel.Nethery@gettyimages.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/joel-nethery-7bb79148",
          "image":"",
          "companyId":22
        },
        {
          "id":33,
          "name":"Ian Thomas",
          "position":"Director of Application Development",
          "email":"ian.thomas@gettyimages.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/ian-thomas-ab99442",
          "image":"",
          "companyId":22
        },
        {
          "id":34,
          "name":"Christy Pope",
          "position":"Senior Software Engineer",
          "email":"christy.pope@gettyimages.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/cpope",
          "image":"",
          "companyId":22
        },
        {
          "id":35,
          "name":"Ken Parker",
          "position":"Director of Engineering",
          "email":"kenp@indeed.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/parkerken",
          "image":"",
          "companyId":23
        },
        {
          "id":36,
          "name":"Lily Webb",
          "position":"Finance and Human Resources Manager",
          "email":"Lily.Webb@indigoslate.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/webblily",
          "image":"",
          "companyId":24
        },
        {
          "id":37,
          "name":"Jeff House",
          "position":"Director of Engineering",
          "email":"Jeff.House@indigoslate.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/jeffhouse425",
          "image":"",
          "companyId":24
        },
        {
          "id":38,
          "name":"Jennifer Rance",
          "position":"Community Relations Manager",
          "email":"v-jerance@microsoft.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/jenrance",
          "image":"",
          "companyId":25
        },
        {
          "id":39,
          "name":"Vanessa Filliberti",
          "position":"Partner General Engineering Manager",
          "email":"vanessaf@exchange.microsoft.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/vanessa-feliberti-a9426b3",
          "image":"",
          "companyId":25
        },
        {
          "id":40,
          "name":"Chris Burroughs",
          "position":"Test Manager",
          "email":"chris.burroughs@microsoft",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/chris-burroughs-3865483",
          "image":"",
          "companyId":25
        },
        {
          "id":41,
          "name":"Jewel von Kempf",
          "position":"HR Manager",
          "email":"jvonkempf@skytap.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/jewelvonkempf",
          "image":"",
          "companyId":26
        },
        {
          "id":42,
          "name":"Scott Brady",
          "position":"Web UI Team Lead",
          "email":"sbrady@skytap.com",
          "twitter":"@mrscottbrady",
          "linked_in_url":"https://www.linkedin.com/in/mrscottbrady",
          "image":"",
          "companyId":26
        },
        {
          "id":43,
          "name":"Matt Mehlhope",
          "position":"Senior Engineer Web UI",
          "email":"mmehlhope@skytap.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/mattmehlhope",
          "image":"",
          "companyId":26
        },
        {
          "id":44,
          "name":"Jill Domanico",
          "position":"VP of Talent",
          "email":"jdomanico@skytap.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/jill-domanico-16b27a1",
          "image":"",
          "companyId":26
        },
        {
          "id":45,
          "name":"Urmila Nadkarni",
          "position":"Software Engineer",
          "email":"urmila.nadkarni@socrata.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/urmilanadkarni",
          "image":"urmila.jpg",
          "companyId":27
        },
        {
          "id":46,
          "name":"Jovana Teodorovic",
          "position":"Director of Talent",
          "email":"jovana.teodorovic@socrata.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/jovanateodorovic",
          "image":"",
          "companyId":27
        },
        {
          "id":47,
          "name":"Franklin Williams",
          "position":"Development Manager",
          "email":"franklin.williams@socrata.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/franklin-williams-1398523",
          "image":"",
          "companyId":27
        },
        {
          "id":48,
          "name":"Daryn Nakhuda",
          "position":"Co-Founder",
          "email":"daryn@spare5.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/darynnakhuda",
          "image":"",
          "companyId":28
        },
        {
          "id":49,
          "name":"Tom Dabson",
          "position":"Engineering Director",
          "email":"tom@artefactgroup.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/tomdabson",
          "image":"tom_dabson.png",
          "companyId":30
        },
        {
          "id":50,
          "name":"Dave Miller",
          "position":"Recruiting",
          "email":"davemiller@artefactgroup.com",
          "twitter":"https://twitter.com/heydavemiller",
          "linked_in_url":"https://www.linkedin.com/in/dsmiller",
          "image":"dave_miller.jpg",
          "companyId":30
        },
        {
          "id":51,
          "name":"Masuma Henry",
          "position":"Executive Director",
          "email":"Masuma@artefactgroup.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/masumahenry",
          "image":"",
          "companyId":30
        },
        {
          "id":52,
          "name":"Shane Currier",
          "position":"Director of Development",
          "email":"shane@enlearn.org",
          "twitter":"@enlearn.org",
          "linked_in_url":"https://www.linkedin.com/in/shanecurrier",
          "image":"Shane-Currier.jpg",
          "companyId":31
        },
        {
          "id":53,
          "name":"Paul Ellis",
          "position":"Director of Product",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/paulkellis",
          "image":"Paul-Ellis.jpg",
          "companyId":31
        },
        {
          "id":54,
          "name":"Hasmik Tananyan",
          "position":"Software Engineer",
          "email":"",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/hasmik-tananyan-mkrtchyan-3474a726",
          "image":"",
          "companyId":31
        },
        {
          "id":55,
          "name":"Jennifer Biely",
          "position":"Finance and Human Resources Manager",
          "email":"jennifer@enlearn.org",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/jennifer-biely-b522ba1a",
          "image":"",
          "companyId":31
        },
        {
          "id":56,
          "name":"Alison Bower",
          "position":"Internal Education Manager",
          "email":"alison@enlearn.org",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/alison-bower-65b9406",
          "image":"",
          "companyId":31
        },
        {
          "id":57,
          "name":"Maria Ray",
          "position":"Sr. Director, Cloud Integration",
          "email":"maria.ray@ctl.io",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/maria-ray-1725063",
          "image":"",
          "companyId":32
        },
        {
          "id":58,
          "name":"Dana Bowlin",
          "position":"Director, CenturyLink Cloud",
          "email":"dana.bowlin@ctl.io",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/danabowlin",
          "image":"",
          "companyId":32
        },
        {
          "id":59,
          "name":"Doug Cole",
          "position":"Founder & CTO",
          "email":"doug@estately.com",
          "twitter":"@dougcole",
          "linked_in_url":"",
          "image":"",
          "companyId":33
        },
        {
          "id":60,
          "name":"David Weiser",
          "position":"Software Engneer",
          "email":"davidann@moz.com",
          "twitter":"",
          "linked_in_url":"https://www.linkedin.com/in/david-weiser-238b6223",
          "image":"",
          "companyId":2
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    'use strict';
    return queryInterface.bulkDelete('employees', null, {});
  }
};
