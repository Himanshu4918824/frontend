import Image from "next/image";

const stats = [
  ["bi-people", "50+", "Events Organized"],
  ["bi-heart", "10,000+", "Lives Impacted"],
  ["bi-person", "100+", "Volunteers"],
  ["bi-geo-alt", "15+", "Districts Reached"],
];

const points = [
  {
    icon: "bi-megaphone",
    title: "Create Awareness",
    text: "Through impactful campaigns and programs",
  },
  {
    icon: "bi-people",
    title: "Empower Communities",
    text: "By supporting education, health and livelihood initiatives",
  },
  {
    icon: "bi-bullseye",
    title: "Build A Better Bihar",
    text: "Through unity, service and sustainable development",
  },
];


export default function HomePage() 
{
  return (<div>

   
    <div style={{height: 600, position: 'relative', overflow: 'visible'}}>

      <Image
        src="/images/homepic.png"
        alt="BBL Team"
        fill
        priority
        style={{objectFit: 'cover', objectPosition:'center'}}
      />

      <div style={{ position: 'absolute', inset: 0,background: `linear-gradient(90deg, #000d, #0005, transparent)`}} />

      <div className="container h-100 position-relative">
        <div className="row align-items-center h-100">
          <div className="col-lg-6 text-white">

            <small>TOGETHER WE CAN ──</small>

            <h1 style={{fontSize:65,fontWeight:800,lineHeight:.95, margin:'15px 0'  }}>
              BUILD A<br />
              <span style={{color: '#e21b23'}}>BETTER BIHAR</span>
            </h1>

            <p style={{width:470,lineHeight:1.7,color:'#ddd'}}>
              BBL is a youth-driven organization working for social
              welfare, awareness, education and community empowerment.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-danger">
                Explore Our Events →
              </button>

              <button className="btn btn-outline-light">
                Join Our Mission
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container" style={{position:'absolute',bottom:-55,left:0,right:0}}>
        <div className="row bg-white rounded-4 shadow">

          {stats.map(([icon, number, label]) => (
            <div className="col-6 col-lg-3" key={label}>
              <div style={{height:110,padding:'20px 25px', borderRadius:'1px solid #eee'}} className="d-flex align-items-center gap-3">
                <i className={`bi ${icon}`}  style={{fontSize:28,color:' #c71922'}} />

                <div>
                  <h3 style={{margin:0,fontSize:28,fontWeight:700}}>{number}</h3>
                  <small style={{color:'#666'}}>{label}</small>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>


    
      <div className="container m-5 p-5">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-4">

            <span style={{color:'#9e1720',fontSize:12,fontWeight:800,letterSpacing:1.5}}>ABOUT US</span>

            <h1 style={{fontSize:38,lineHeight:1.15,fontWeight:800,margin:'12px 0 20px'}}>
              We Are A Youth-Driven
              <br />
              <span style={{color:'#9e1720'}}>Social Organization</span>
            </h1>

            <p style={{color:'#666',fontSize:14,lineHeight:1.8}}>
              BBL (Bihar Based League) is a non-profit organization
              working for social welfare, awareness, education, health,
              environment and community empowerment. We believe in the
              power of youth and collective action to bring positive
              change in society.
            </p>

            <div style={{display:'flex',alignItems:'center',gap:15,margin:'25px 0',color:'#555'}}>
              <span style={{fontSize:35,color:'#222'}}>〰</span>
              <b style={{fontSize:13}}>BBL Team</b>
            </div>

            <button  className="btn btn-danger px-4 py-2">
              Know More About Us
              <i className="bi bi-arrow-right ms-2" />
            </button>

          </div>


          {/* CENTER IMAGE */}
          <div className="col-lg-4">

            <div style={{ height: 440, position: 'relative', borderRadius: 20, overflow: 'visible'}}>

              <Image
                src="/images/tree.png"
                alt="BBL Team"
                fill
                style={{objectFit:'cover',borderRadius:20 }}
              />
              

              {/* Floating card */}
              <div style={{position: 'absolute', bottom: -20, left: -35, width: 125, padding:18, borderRadius: 15 ,background: 'white', color: '#a71922', fontSize: 11,boxShadow:' 0 8px 25px #0002',textAlign:'center'}}>
                <i style={{display:'block',color:'#a71922',fontSize:28,marginBlock:8}} className="bi bi-people" />
                <span>
                  Building Better
                  <br />
                  Communities
                </span>
              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="col-lg-4">

            <div className="mission-list">

              {points.map((item, index) => (

                <div style={{display:'flex',gap:18,position:'relative',paddingBottom:35}} key={item.title}>

                  <div style={{width:58,height:58,borderRadius:50,background:'#fff0f0',color:'#a71922',display:'flex',alignItems:'center',justifyContent:'center',fontSize:24}}>
                    <i className={`bi ${item.icon}`} />
                  </div>

                  <div>
                    <h3 style={{fontSize:16,fontWeight:700,margin:'5px 0'}}>{item.title}</h3>
                    <p style={{color:'#777',fontSize:12,lineHeight:1.6,maxWidth:220,margin:0}}>{item.text}</p>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </div>




      <div style={{padding:'25px 0',background:'linear-gradient(90deg, #420007e8, #78000be8)',color: 'white' }}>
        <div  className="container">
        <div className="row align-items-center">

          {/* Heading */}
          <div className="col-lg-3 mb-3 mb-lg-0">
            <small style={{fontSize:10,fontWeight:700,letterSpacing:1}}>OUR IMPACT</small>
            <h2 style={{fontSize:20,fontWeight:700,lineHeight:1,margin:'3px 0 0'}}>
              Making A Difference
              <br />
              <span style={{color:"#ed1c24"}}>In Numbers</span>
            </h2>
          </div>

          {/* Stats */}
          <div className="col-lg-9">
            <div className="row">

              {stats.map(([icon, number, label]) => (
                <div className="col-6 col-md-3" key={label}>
                  <div style={{height:60,display:'flex',alignItems:'center',gap:13,borderLeft:'1px solid #ffffff40',paddingLeft:25}}>

                    <i className={`bi ${icon}`} style={{color:'#ed1c24',fontSize:24}} />

                    <div>
                      <h3 style={{margin:0,fontSize:20,fontWeight:700}}>{number}</h3>
                      <p style={{margin:'2px 0 0',color:'#ddd',fontSize:10}}>{label}</p>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>

     

    </div>




  </div>);
}