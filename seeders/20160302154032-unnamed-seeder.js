module.exports = {
  up: function (queryInterface, Sequelize) {
    'use strict';
    return queryInterface.bulkInsert("Companies",
      [
        {
          "id":1,
          "name":"Expedia",
          "street":"",
          "city":"Bellevue",
          "state":"WA",
          "zip":98004,
          "website":"http://www.lifeatexpedia.com/",
          "logo":"expedia.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":2,
          "name":"Moz",
          "street":"1100 2nd Ave #500",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"https://moz.com/about/jobs",
          "logo":"Moz-Logo.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":3,
          "name":"Liquid Planner",
          "street":"2324 Eastlake Ave E #500",
          "city":"Seattle",
          "state":"WA",
          "zip":98102,
          "website":"http://www.liquidplanner.com/careers/",
          "logo":"liquid_planner.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":4,
          "name":"Marchex",
          "street":"520 Pike St # 2000",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"http://www.marchex.com/company/careers/",
          "logo":"marchex_logo.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":5,
          "name":"Apex Learning Inc.",
          "street":"1215 4th Ave #1500",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"https://www.apexlearning.com/",
          "logo":"apex_learning.jpeg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":6,
          "name":"Chef Software",
          "street":"619 Western Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"https://www.chef.io/",
          "logo":"chef_logo.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":7,
          "name":"EMC Isilon Systems Inc",
          "street":"505 1st Avenue South",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"http://www.emc.com/en-us/storage/isilon/index.htm",
          "logo":"isilon_logo.gif",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":8,
          "name":"RealPage",
          "street":"",
          "city":"",
          "state":"",
          "zip":null,
          "website":"",
          "logo":"",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":9,
          "name":"EnergySavvy",
          "street":"159 S Jackson St #420",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"https://www.energysavvy.com/careers",
          "logo":"energysavvy-logo.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":10,
          "name":"Substantial",
          "street":"900 E Pine St #202",
          "city":"Seattle",
          "state":"WA",
          "zip":98122,
          "website":"http://substantial.com/",
          "logo":"substantial.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":11,
          "name":"Foundry Interactive",
          "street":"318 1st Avenue South #200",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"http://www.foundryinteractive.com/",
          "logo":"foundry_interactive.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":12,
          "name":"Zillow",
          "street":"31, 1301 2nd Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"http://www.zillow.com/jobs/seattle-office/",
          "logo":"zillow-logo.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":13,
          "name":"NIRD",
          "street":"1517 12th Ave #201",
          "city":"Seattle",
          "state":"WA",
          "zip":98122,
          "website":"http://nird.us/",
          "logo":"nird.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":14,
          "name":"Pacific Northwest National Laboratory",
          "street":"1100 Dexter Ave N # 400",
          "city":"Seattle",
          "state":"WA",
          "zip":98109,
          "website":"http://www.pnnl.gov/",
          "logo":"pnnl.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":15,
          "name":"Redfin",
          "street":"2025 1st Ave #500",
          "city":"Seattle",
          "state":"WA",
          "zip":98121,
          "website":"http://www.redfin.com/about/jobs",
          "logo":"redfin.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":16,
          "name":"Amazon",
          "street":"440 Terry Ave N",
          "city":"Seattle",
          "state":"WA",
          "zip":98109,
          "website":"http://www.amazon.jobs/location/seattle-wa",
          "logo":"amazon.jpeg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":17,
          "name":"Nordstrom",
          "street":"1617 6th Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"http://about.nordstrom.com/careers/#/headquarters-careers/main",
          "logo":"nordstrom-logo.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":18,
          "name":"General UI",
          "street":"3417 Evanston Ave N #501",
          "city":"Seattle",
          "state":"WA",
          "zip":98103,
          "website":"http://generalui.com/who-we-are/",
          "logo":"general_ui_logo.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":19,
          "name":"BookingSuite",
          "street":"220 W Mercer St #500",
          "city":"Seattle",
          "state":"WA",
          "zip":98119,
          "website":"http://suite.booking.com/",
          "logo":"booking-suite.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":20,
          "name":"Concur",
          "street":"601 108th Ave NE #1000",
          "city":"Bellevue",
          "state":"WA",
          "zip":98004,
          "website":"https://www.concur.com/en-us/careers",
          "logo":"concur_logo.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":21,
          "name":"Envestnet",
          "street":"701 5th Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"http://www.envestnet.com/",
          "logo":"envestnet.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":22,
          "name":"Getty Images",
          "street":"605 5th Ave S Suite 400",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"http://www.gettyimagesjobs.com/",
          "logo":"getty-images-logo.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":23,
          "name":"Indeed",
          "street":"",
          "city":"",
          "state":"",
          "zip":null,
          "website":"",
          "logo":"indeed.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":24,
          "name":"Indigo Slate",
          "street":"2475 140th Ave NE",
          "city":"Bellevue",
          "state":"WA",
          "zip":98005,
          "website":"http://indigoslate.com/careers.html",
          "logo":"indigo_slate.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":25,
          "name":"Microsoft",
          "street":"1 Microsoft Way",
          "city":"Redmond",
          "state":"WA",
          "zip":98052,
          "website":"https://careers.microsoft.com/",
          "logo":"microsoft-logo.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":26,
          "name":"Skytap",
          "street":"719 2nd Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"https://www.skytap.com/company/careers/",
          "logo":"skytap.jpeg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":27,
          "name":"Socrata",
          "street":"83 S King St #107",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"http://careers.socrata.com/",
          "logo":"socrata.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":28,
          "name":"Spare5",
          "street":"",
          "city":"",
          "state":"",
          "zip":null,
          "website":"http://www.spare5.com/jobs/",
          "logo":"spare5.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":29,
          "name":"Tune",
          "street":"2220 Western Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98121,
          "website":"http://www.tune.com/careers/",
          "logo":"tune.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":30,
          "name":"Artefact",
          "street":"619 Western Ave #500",
          "city":"Seattle",
          "state":"WA",
          "zip":98104,
          "website":"https://www.artefactgroup.com/content/job/",
          "logo":"artefact-logo.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":31,
          "name":"Enlearn",
          "street":"2815 Eastlake Ave E #135",
          "city":"Seattle",
          "state":"WA",
          "zip":98102,
          "website":"http://www.enlearn.org/join-us/",
          "logo":"enlearn.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":32,
          "name":"CenturyLink",
          "street":"1600 7th Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"http://www.centurylink.com/Pages/AboutUs/CompanyInformation/Careers/",
          "logo":"centurylink.jpg",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "id":33,
          "name":"Estately",
          "street":"1809 1550 7th Ave",
          "city":"Seattle",
          "state":"WA",
          "zip":98101,
          "website":"http://www.estately.com/about",
          "logo":"estately-logo.png",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    'use strict';
    return queryInterface.bulkDelete('Companies', null, {});
  }
};