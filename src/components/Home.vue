<template>
  <div class="page">
    <div style="background-image: url('static/img/forestBj.jpg');" class="row topNav">
      <div class="col s6 offset-s3 m4 offset-m4 l2 offset-l5 center-align">
        <img src="static/img/mulinda.png" class="responsive-img" alt="">
      </div>
      <div class="col s12">
        <h2 class="subtitle center-align h2">
          {{ subtitle }}
        </h2>
      </div>
    </div>
    <div class="row sectionHeading">
      <h4>{{ section[0].title}}</h4>
    </div>
    <div class="row">
      <div class="col m6">
        <img src="static/img/vegetables.jpeg" class="responsive-img" />
      </div>
      <div class="col m6 valign-wrapper">
        <p><span class="text-strong greenText pointer">{{ companyNaxme }}</span> {{ section[0].text }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col m6 valign-wrapper">
        <p>{{ section[1].text }}</p>
      </div>
      <div class="col m6">
        <img src="static/img/people.jpeg" class="responsive-img" />
      </div>
    </div>
    <div class="row sectionHeading">
      <h4>{{ section[1].title}}</h4>
    </div>
    <div class="row">
      <div class="col s12 parallaxBg" v-parallax="0.1">
        <img class="responsive-img" src="static/img/backgroundBlur.png" alt="">
      </div>
      <div class="col s10 offset-s1 valign-wrapper">
        <div class="row">
          <div v-if="item.show" v-for="(item,i) in section" :key="i">
            <h6 class="greenText"><u>{{ item.title }}</u></h6>
            <p>
              {{ item.text }}
            </p>
          </div>
          <a v-show="hasMoreItems" class="greenText pointer waves-effect" v-on:click="ReadMore()" role="button">Read More</a>
        </div>
      </div>
    </div>
    <div class="row card">
      <div class="row sectionHeading">
        <h4>{{ section[5].title}}</h4>
      </div>
      <div class="col s6 m4 row">
        <div class="col s12" v-if="selectedService != i" v-on:click="selectedService = i" v-for="(service,i) in services" :key="i">
          <h6 class="pointer valign-wrapper card-panel hoverable">
            <i class="center-align material-icons">{{ service.icon }}</i>
            <span class="space right-align">{{ service.halfTitle }}</span>
          </h6>
        </div>
      </div>
      <div class="col s6 m8 row center-align">
        <div class="col s12 m12">
          <h5 class="left-align">
            <span class="center-align">{{ services[selectedService].title }}</span>
          </h5>
        </div>
        <div class="col s12 m12">
          <p class="center-align">
            <ul>
              <li v-for="(item,i) in services[selectedService].text" :key="i">
                <p class="left-align onHover valign-wrapper pointer">
                  <i class="material-icons onHover">adjust</i>
                  <i class="material-icons onNotHover">brightness_1</i>
                  <span v-show="i != services[selectedService].text.length -1">{{ item }}</span>
                  <vue-typer v-show="i == services[selectedService].text.length - 1" :text="item"></vue-typer>
                </p>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="row sectionHeading">
        <h4>{{ section[6].title}}</h4>
      </div>
      <div class="col s12 m6 l4 offset-m3 offset-l4">
        <div class="card">
          <div class="card-image">
            <img class="responsice-img" src="static/img/MrsJoyce.png">
            <span class="card-title">
                                      {{ members[0].name }}
                                    </span>
          </div>
          <div class="card-content">
            <p>
              {{ members[0].description }}
            </p>
          </div>
          <div class="card-action right-align">
            <a class="btn-floating green waves-effect" :href="'mailto:' + members[0].email"><i class="material-icons">mail</i></a>
            <a class="btn-floating green waves-effect" :href="'tel.:' + members[0].cell"><i class="material-icons">phone</i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="row sectionHeading">
        <h4>{{ section[7].title}}</h4>
      </div>
      <div class="col s10 m8 offset-s1 offset-m2">
        <carousel navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>" navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>" :navigationEnabled="true" :autoplayHoverPause="true" :autoplay="true" perPage="1">
          <slide v-for="(project,i) in projects" :key="i">
            <div class="row">
              <div class="col s10 offset-s1 row card">
                <div class="col s12">
                  <h5 class="center-align text-strong greenText">{{ project.title }}</h5>
                  <h6 class="center-align">{{ project.client }}</h6>
                </div>
                <div class="col s12 card-action">
                  <div class="col s12 row">
                    <div class="progress">
                      <div class="determinate" :style="'width:' + project.status"></div>
                    </div>
                  </div>
                  <div class="right-align">
                    <p class="right-align">{{ project.ref.name }}</p>
                    <p class="right-align">{{ project.ref.contact }}</p>
                  </div>
                </div>
              </div>
  
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <div class="row">
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text text-strong">Talk to us</h5>
              <p class="grey-text text-lighten-4">
                <span class="text-strong">Cell : </span> <span class="pointer">{{ cell }}</span>
              </p>
              <p class="grey-text text-lighten-4">
                <span class="text-strong">Fax : </span> <span class="pointer">{{ fax }}</span>
              </p>
              <p class="grey-text text-lighten-4">
                <span class="text-strong">E-mail : </span> <span class="pointer">{{ email }}</span>
              </p>
  
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text text-strong">Company registration</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">CK2007/199994/23</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            <span class="left valign-wrapper"> © 2018 Copyright Mulinda</span>
            <span class="right valign-wrapper"><a href="https://jmrsquared.com/joe" class="grey-text text-lighten-4 valign-wrapper">Created with  <i class="material-icons">favorite</i>  by Sirwali Joseph</a></span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Mulinda",
      subtitle: "Taking care of our environment",
      companyName: "Mulinda Environmental Consulting CC ",
      currentShowing: 4,
      hasMoreItems: true,
      members: [
        {
          name: "Ms. Thifhelimbilu Joyce Khorommbi ",
          description:
            "She obtained qualifications in environmental sciences, B ENV Sc, and Certificate in Recognition of Constructive and Meaningful contribution to the City of Cape Town as an Intern/ student. Ms. Khorommbi has accomplished a wide range of experience gained in South Africa and abroad i.e. Cape Town, Limpopo Province, Mpumalanga, Community Based Projects and Local Government. Ms. T.J Khorommbi has 100% interest in the company and works hands on with all activities undertaken.",
          cell: "072 361 6854",
          email: "mulindaenviro@yahoo.co.za"
        }
      ],
      section: [
        {
          title: "Company Overview",
          text:
            "is an establishing multidisciplinary organization with extensive expertise in Environmental - Management of all related project phases. It is wholly owned and managed by previously disadvantaged individuals (females). The company is 100% owned by women, who pride themselves in upholding black empowerment by willing to employ previously disadvantaged individuals, ensuring skills transfer to all communities served."
        },
        {
          title: "Background",
          text:
            "The company has been established in 2007 and started operation in 2008, with a view of the need to provide environmental related services. The company is rooted in Limpopo. Mulinda Environmental Consulting’s core values of integrity, knowledge and service, an essential combination needed to deliver to our clients and the communities served."
        },
        {
          show: true,
          text:
            "The shareholders are experienced persons in consulting with special skills in environmental management, sanitation and water resources with 9 years or more experience in the field of managing various projects of environmental, sanitation, water resources, and civil engineering related issues."
        },
        {
          title: "Mission Statement",
          show: false,
          text:
            "Our main objective is to provide cost effective, sustainable customer satisfactory solutions in environmental, sanitation, and water resources management, project management, training and other services. The corporation also exists to uplift the living standard of people in the province, the country and the region."
        },
        {
          title: "Aims and Objectives",
          show: false,
          text:
            "Mulinda Environmental Consulting cc and Collaborators intends to provide sustainable land, water, air and biodiversity management solutions and other services in effective and efficient manner through partnerships with Government Departments, Municipalities, Public and Private Companies and the Communities we serve."
        },
        {
          title: "Our services"
        },
        {
          title: "Company Members",
          show: false,
          text:
            "Mulinda Environmental Consulting cc and Collaborators intends to provide sustainable land, water, air and biodiversity management solutions and other services in effective and efficient manner through partnerships with Government Departments, Municipalities, Public and Private Companies and the Communities we serve."
        },
        {
          title: "Our Projects",
          show: false,
          text:
            "Mulinda Environmental Consulting cc and Collaborators intends to provide sustainable land, water, air and biodiversity management solutions and other services in effective and efficient manner through partnerships with Government Departments, Municipalities, Public and Private Companies and the Communities we serve."
        }
      ],
      projects: [
        {
          title:
            "Kgapamadi Business Route from Gravel to surface (Asphalt) Road and Stormwater control",
          client: "Elias Motswaledi Municipality in partner with Sky High",
          ref: {
            name: "Andy: Director",
            contact: "079 528 9933"
          },
          status: "30%"
        },
        {
          title:
            "Kgapamadi Business Route from Gravel to surface (Asphalt) Road and Stormwater control",
          client: "Elias Motswaledi Municipality in partner with Sky High",
          ref: {
            name: "Andy: Director",
            contact: "079 528 9933"
          },
          activity: "Compliance Monitoring",
          status: "30.00%"
        },
        {
          title:
            "Upgrading of Vanderbjil Park , Tshepiso, Rustervaal and Nanescol Cemeteries",
          client: "Emfulweni Municipality in partner with Onboard",
          ref: {
            name: "Teresa: Project Manager",
            contact: "076 174 6983"
          },
          activity: "EIA’s and EMP",
          status: "100.00%"
        },
        {
          title:
            "construction of 300 Ventilated Improved Pitlatrines sanitation project",
          client: "Mopani District Municipality",
          ref: {
            name: "Technical director:Mr Ramathoka",
            contact: "015 811 6300/ 083 256 7560"
          },
          activity: "EIA’s",
          status: "100.00%"
        },
        {
          title:
            "and M Construction of 200 Ventilated Improved Pitlatrines sanitatiproject pality",
          client: "Mopani District Municipality",
          ref: {
            name: "Technical director:Mr Ramathoka",
            contact: "015 811 6300"
          },
          activity: "EIA’s",
          status: "100.00%"
        },
        {
          title:
            "Upgrading of Lenyenye sewage works in partner with KACE consulting Engineers.",
          client: "Mopani District Municipality",
          ref: {
            name: "Mr Grobler",
            contact: "0823235755"
          },
          activity: "EMP’s",
          status: "100.00%"
        },
        {
          title:
            "Cco u Construction of Mzilela and Khaxani water reticulatio line in partn with MOT Proffessional Consultancy",
          client: "Mopani District Municipality",
          ref: {
            name: "Mr Lesufi",
            contact: "0826637328"
          },
          activity: "EMP’s",
          status: "100.00%"
        },
        {
          title:
            "Upgrading of Tanda and Tshikhudini water reticulation line in partner with Tshino",
          client: "Vhembe District Municipality",
          ref: {
            name: "Mr Mudau",
            contact: "015 2914769"
          },
          activity: "EMPs",
          status: "100.00%"
        },
        {
          title:
            "EIA fo Construction of Alldays and Lebowakgomu A &B taxi \nrank a\nnd mulmulti purpose centre in partner with Tshino",
          client: "Capricorn District Municipality",
          ref: {
            name: "Mr Mudau",
            contact: "015 2914769"
          },
          activity: "EMP’s",
          status: "100.00%"
        },
        {
          title:
            "Tonwship establishment Ga-Ntata village in Partner with with Makasane deveiopers",
          client: "Mopani District Municipality",
          ref: {
            name: "Mr NtshaneSolani",
            contact: "0832801221/ 0735791572"
          },
          activity: "EIA’s",
          status: "100.00%"
        },
        {
          title:
            "Mini P mining perrmi t for Rediramokgo Trading cc in Maruleng Marule Municipality",
          client: "REdiramokgo Trading cc",
          ref: {
            name: "Booibooi",
            contact: "0834727236"
          },
          activity: "Permit",
          status: "100.00%"
        },
        {
          title:
            "filling Filling station establishment, done for Devrede Krom\n hoek kroem Filling Station cc",
          client: "Filling Station cc",
          ref: {
            name: "Joseph Sebola",
            contact: "072 6202 644"
          },
          activity: "EIA’s",
          status: "100.00%"
        },
        {
          title:
            "Upgra Arconhoek Buffelshoek and Okkernootboom Bulk water water Supply, Mpumalanga Province for MOT in partnership with",
          client: "Bushbuckridge Local Municipality",
          ref: {
            name: "Mr Lesufi",
            contact: "0826637328"
          },
          activity: "EMP’S",
          status: "100.00%"
        },
        {
          title:
            "Tours Bulk Water Scheme (Refurbishment of Boreholes and Bulk Line Linking Main Reservoir to supply Reservoirs) within Greater Tzaneen Local Municipality in partnership with Tangos",
          client: "Mopani District",
          ref: {
            name: "Mr F Ngobe",
            contact: "0829405454"
          },
          activity: "EMP’S",
          status: "100.00%"
        },
        {
          title:
            "Road Maintenance from Mica to the Oaks within Maruleng Local Municipality in partner with KWCRS",
          client: "Road Agency",
          ref: {
            name: "Mr Baloyi",
            contact: "0152914934"
          },
          activity: "EMP’S",
          status: "100.00%"
        },
        {
          title:
            "The upgrading Mohlamme access road from gravel to tar in Ntwane Settlement within Elias Motsoaledi Local Municipality in partner with MOT",
          client: "Greater Sekhukhune District",
          ref: {
            name: "Mr Lesufi",
            contact: "0826637328"
          },
          activity: "EMP’S",
          status: "100.00%"
        },
        {
          title:
            "Project Management and Operational support consultant to the upgrading of road T571D from MarbleHall to Modimolle in the Waterberg District Municipality, Limpopo \nProvince",
          client: "Road Agency Limpopo",
          ref: {
            name: "Ms Shoni Tshivhase",
            contact: "015 291 4236"
          },
          activity: "EIA’s ,Environmental Monitoring Complince",
          status: "100%"
        },
        {
          title:
            "Project Management and Operational support consultant to the upgrading and Extension of Giyani Water Treatment Works/Plant within Giyani Local Municipality with Mopani District Municipality in partnership with Tangos, Limpopo Province",
          client: "Mopani District",
          ref: {
            name: "Mr F Ngobe",
            contact: "0829405454"
          },
          activity:
            "EIA’s, EMPr for borrow pits mining permits & Environmental Monitoring Compliance",
          status: "100%"
        },
        {
          title:
            "EIAs and Application of borrow pits mining permits for the upgrading of Modlijadji to Mavele road , Mopani District Municipality in partnership with KACE consulting Engineers, Limpopo Province",
          client: "Mopani District Municipality",
          ref: {
            name: "Mr Grobler",
            contact: "0823235755"
          },
          activity: "EIAs and EMPr",
          status: "100.00%"
        },
        {
          title:
            "EIAs and Application of borrow pits mining permits for the upgrading of Marongwane to Thusang Road , Bushbuck ridge Local Municipality in partnership with GSTCE Consulting Engineers , Mpumalanga Province",
          client: "Bushbuckridge Local Municipality",
          ref: {
            name: "Boniface",
            contact: "0843712359"
          },
          activity: "EIAs and EMPr",
          status: "100.00%"
        },
        {
          title:
            "EIAs and Application of borrow pits mining permits for the upgrading of Kgaphamadi Route and storm water discharge , Sekhukhune District Municipality with Sky High Consulting Engineers in partnership with",
          client: "Sekhukhune District Municipality",
          ref: {
            name: "Dunisani",
            contact: "0733407928"
          },
          activity: "EIAs and EMPr",
          status: "100.00%"
        }
      ],
      selectedService: 0,
      services: [
        {
          halfTitle: "TRAINING",
          title: "TRAINING AND DEVELOPMENT",
          text: [
            "We will render on job training as follows:",
            "Technical skills training – on surface water quality monitoring,",
            "Biomonitoring, Soil studies,",
            "Hydro- environmental Investigations",
            "Aquatic Weeds Monitoring",
            "Productivity Management",
            "Development of best practices procedures    ...."
          ],
          icon: "school"
        },
        {
          halfTitle: "ENVIRONMENTAL",
          title: "ENVIRONMENTAL",
          text: [
            "Environmental Management Systems (EMS)",
            "Environmental Impact Assessment (EIA)",
            "Environmental Management Plans (EMP)",
            "Environmental  Monitoring and Audits",
            "Environmental Pollution Assessment and prevention (i.e) Air , Water and land pollution",
            "Surface Water Quality Monitoring and Management",
            "Aquatic Ecological Risk Assessment (Biomonitoring and Aquatic Weeds Monitoring and Management)   ..."
          ],
          icon: "local_florist"
        },
        {
          halfTitle: "COMMUNITY",
          title: "COMMUNITY SOCIAL FACILITATION",
          text: [
            "Management Support (Assistant Programme)",
            "Development of best practice procedures ",
            "Capacity building",
            "Community consultation",
            "Ongoing community social facilitation   ..."
          ],
          icon: "forum"
        }
      ],
      cell: "072 361 6854",
      fax: "086 535 8400",
      email: "mulindaenviro@yahoo.co.za"
    };
  },
  methods: {
    ReadMore() {
      var withShow = this.section.filter(v => v.show);
      if (
        withShow &&
        withShow.length > 0 &&
        this.section.length > withShow.length
      ) {
        var last = withShow[withShow.length - 1];
        var index = this.section.indexOf(last) + 1;

        this.section[index].show = true;
        if (index == this.section.length - 2) {
          this.hasMoreItems = false;
        }
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page {
  height: 80vh;
}

.title {
  color: white;
  opacity: 0.8;
}

.subtitle {
  color: white;
  opacity: 0.7;
  text-align: center;
}

.topNav {
  padding-top: 5%;
  min-height: 0%;
  height: 100%;
  background-size: cover;
}

.greenText {
  color: #66bb6a;
}

.text-strong {
  font-weight: bolder;
}

.parallaxBg {
  z-index: -1;
  display: block;
  height: auto;
  width: 100%;
  position: absolute;
  margin-top: -20%;
  opacity: 0.6;
}

.pointer {
  cursor: pointer;
}

.sectionHeading {
  text-align: center;
  font-weight: bolder;
  text-decoration: underline;
  text-decoration-color: #66bb6a;
}

.page-footer {
  background-color: #66bb6a;
}

.space {
  margin: 0 auto;
}

.onHover i.onNotHover {
  display: none;
}

.onHover:hover i.onNotHover {
  display: block;
}

.onHover:hover i.onHover {
  display: none;
}
</style>
