openYYC = {
  traffic_camera_locations: {
    community_name: false,
    location: true,
    update_frequency: 'static',
    api_doc: 'https://data.calgary.ca/Transportation-Transit/Traffic-Cameras/k7p9-kppz',
    endpoint: 'https://data.calgary.ca/resource/35kd-jzrv.json'
  },
  business_licenses: {
    community_name: false,
    location: true,
    update_frequency: 'monthly',
    api_doc: 'https://dev.socrata.com/foundry/data.calgary.ca/agnq-4jj6',
    endpoint: 'https://data.calgary.ca/resource/agnq-4jj6.json'
  },
  community_crime_statistics: {
    community_name: false,
    location: true,
    update_frequency: 'monthly',
    api_doc: "https://data.calgary.ca/Health-and-Safety/Community-Crime-Statistics/848s-4m4z",
    endpoint: "https://data.calgary.ca/resource/kudt-f99k.json"
  },
  business_licenses: {
    community_name: true,
    location: true,
    update_frequency: 'monthly',
    api_doc: 'https://dev.socrata.com/foundry/data.calgary.ca/agnq-4jj6',
    endpoint: 'https://data.calgary.ca/resource/agnq-4jj6.json'
  },
  parcel_address: {
    community_name: false,
    location: true,
    update_frequency: 'weekly',
    api_doc: 'https://data.calgary.ca/Base-Maps/Parcel-Address/9zvu-p8uz',
    endpoint: 'https://data.calgary.ca/resource/5tzh-4bx7.json'
  },
  development_permit_public_notices: {
    community_name: false,
    location: true,
    update_frequency: 'weekly',
    api_doc: 'https://data.calgary.ca/Government/Development-Permit-Public-Notices/8rd9-gix2',
    endpoint: 'https://data.calgary.ca/resource/p4wx-p34k.json'
  },
  development_permit_applications: {
    community_name: true,
    location: true,
    update_frequency: 'daily',
    api_doc: 'https://data.calgary.ca/dataset/Development-Permit-Applications/gmmz-2tuv',
    endpoint: 'https://data.calgary.ca/resource/tcnx-r7pj.json'
  },
  historical_air_quality: {
    community_name: false,
    location: true,
    update_frequency: 'monthly',
    api_doc: 'https://data.calgary.ca/Environment/Historical-Air-Quality/uqjm-jxgp',
    endpoint: 'https://data.calgary.ca/resource/88iq-yi9x.json'
  },
  property_assesments: {
    community_name: false,
    location: true,
    update_frequency: 'weekly',
    api_doc: 'https://data.calgary.ca/dataset/Property-Assessments/6zp6-pxei',
    endpoint: 'https://data.calgary.ca/resource/6mnx-r99s.json'
  },
  census_by_community_2018: {
    community_name: true,
    location: false,
    update_frequency: 'static',
    api_doc: 'https://data.calgary.ca/Demographics/Census-by-Community-2018/cc4n-ndvs',
    endpoint: 'https://data.calgary.ca/resource/cc4n-ndvs.json'
  },
  land_use_redesigantion_applications: {
    community_name: true,
    location: true,
    update_frequency: 'weekly',
    api_doc: 'https://data.calgary.ca/dataset/Land-Use-Redesignation-Applications/6xr2-xfat',
    endpoint: 'https://data.calgary.ca/resource/6ztb-mrci.json'
  },
  secondary_suites: {
    community_name: true,
    location: true,
    update_frequency: 'weekly',
    api_doc: 'https://data.calgary.ca/Business-and-Economic-Activity/Secondary-Suites/jwn6-r58y',
    endpoint: 'https://data.calgary.ca/resource/k25z-i8zq.json'
  },
  traffic_signals: {
    community_name: false,
    location: true,
    update_frequency: 'daily',
    api_doc: 'https://data.calgary.ca/Health-and-Safety/Traffic-Signals/qr97-4jvx',
    endpoint: 'https://data.calgary.ca/resource/dubc-g938.json'
  },
  traffic_incidents: {
    community_name: false,
    location: true,
    update_frequency: '10_minutes',
    api_doc: 'https://data.calgary.ca/Transportation-Transit/Traffic-Incidents/35ra-9556',
    endpoint: 'https://data.calgary.ca/resource/m328-x8wy.json'
  },
  community_points_centroid: {
    community_name: true,
    location: true,
    update_frequency: 'static',
    api_doc: 'https://data.calgary.ca/Base-Maps/Community-Points/j9ps-fyst',
    endpoint: 'https://data.calgary.ca/resource/kzbm-mn66.json'
  },
  city_of_calgary_careers: {
    community_name: false,
    location: false,
    update_frequency: 'daily',
    api_doc: 'https://data.calgary.ca/Government/City-of-Calgary-Careers/5fsi-n9xm',
    endpoint: 'https://data.calgary.ca/resource/jipb-w9dg.json'
  },
  historical_community_populations: {
    community_name: true,
    location: false,
    update_frequency: 'static',
    api_doc: 'https://data.calgary.ca/Demographics/Historical-Community-Populations/jtpc-xgsh',
    endpoint: 'https://data.calgary.ca/resource/eme4-y5m7.json'
  },
  three_oneone_call_centre: {
    community_name: false,
    location: false,
    update_frequency: 'daily',
    api_doc: 'https://data.calgary.ca/Government/311-Call-Centre/hk5h-uv5k',
    endpoint: 'https://data.calgary.ca/resource/xxc8-9gg4.json'
  },
  land_use_districts: {
    community_name: false,
    location: false,
    multipolygon: true,
    update_frequency: 'monthly',
    api_doc: 'https://data.calgary.ca/Base-Maps/Land-Use-Districts/qe6k-p9nh',
    endpoint: 'https://data.calgary.ca/resource/qe6k-p9nh.json'
  },
  calgary_ca_web_analytics_past_30_days: {
    community_name: false,
    location: false,
    multipolygon: false,
    update_frequency: 'daily',
    api_doc: 'https://data.calgary.ca/Help-and-Information/Calgary-ca-Web-Analytics-Past-30-Days/2bak-dk2r',
    endpoint: 'https://data.calgary.ca/resource/2bak-dk2r.json'
  },
  crosswalks: {
    community_name: false,
    location: true,
    multipolygon: false,
    update_frequency: 'static',
    api_doc: 'https://data.calgary.ca/Health-and-Safety/Crosswalks/hxgg-rpad',
    endpoint: 'https://data.calgary.ca/resource/nbax-k7vz.json'
  },
  calgary_transit_stops: {
    community_name: false,
    location: false,
    multipolygon: false,
    point: true,
    update_frequency: 'quartely',
    api_doc: 'https://data.calgary.ca/Transportation-Transit/Calgary-Transit-Stops/muzh-c9qc',
    endpoint: 'https://data.calgary.ca/resource/muzh-c9qc.json'
  },
  water_main_breaks: {
    community_name: false,
    location: false,
    multipolygon: false,
    point: true,
    update_frequency: 'weekly',
    api_doc: 'https://data.calgary.ca/Environment/Water-Main-Breaks/dpcu-jr23',
    endpoint: 'https://data.calgary.ca/resource/dpcu-jr23.json'
  },
  compensation_disclosure_list: {
    community_name: false,
    location: false,
    multipolygon: false,
    point: false,
    update_frequency: 'annual',
    api_doc: 'https://data.calgary.ca/Government/Compensation-Disclosure-List/9bze-mzx6',
    endpoint: 'https://data.calgary.ca/resource/9bze-mzx6.json'
  },
  city_of_calgary_newsroom: {
    community_name: false,
    location: false,
    multipolygon: false,
    point: false,
    update_frequency: 'daily',
    api_doc: 'https://data.calgary.ca/News-and-Events/City-of-Calgary-Newsroom/3x6m-4vs7',
    endpoint: 'https://data.calgary.ca/resource/5ehk-wfu2.json'
  },
  travel_times: {
    community_name: false,
    location: false,
    multipolygon: false,
    point: false,
    update_frequency: 'ten_minutes',
    api_doc: 'https://data.calgary.ca/Transportation-Transit/Travel-Times/aeb8-fh2w',
    endpoint: 'https://data.calgary.ca/resource/aeb8-fh2w.json'
  },
  construction_detours: {
    community_name: false,
    location: true,
    multipolygon: false,
    point: false,
    update_frequency: 'ten_minutes',
    api_doc: 'https://data.calgary.ca/Transportation-Transit/Construction-Detours/w8zq-79bq',
    endpoint: 'https://data.calgary.ca/resource/q5fe-imxj.json'
  },
  city_of_calgary_events: {
    community_name: false,
    location: true,
    multipolygon: false,
    point: false,
    update_frequency: 'twice_daily',
    api_doc: 'https://data.calgary.ca/News-and-Events/City-of-Calgary-Events/n625-9k5x',
    endpoint: 'https://data.calgary.ca/resource/rbmk-85cw.json'
  },
  public_art: {
    community_name: false,
    location: true,
    multipolygon: false,
    point: false,
    update_frequency: 'static',
    api_doc: 'https://data.calgary.ca/Recreation-and-Culture/Public-Art/2kp2-hsy7',
    endpoint: 'https://data.calgary.ca/resource/t27m-7yj8.json'
  },
  property_assesments: {
    community_name: true,
    location: true,
    multipolygon: false,
    point: false,
    update_frequency: 'monthly',
    api_doc: 'https://data.calgary.ca/dataset/Property-Assessments/6zp6-pxei',
    endpoint: 'https://data.calgary.ca/resource/6mnx-r99s.json' 
  },
  corporate_energy_consumption: {
    community_name: false,
    location: false,
    multipolygon: false,
    point: false,
    update_frequency: 'monthly',
    api_doc: 'https://data.calgary.ca/Environment/Corporate-Energy-Consumption/crbp-innf',
    endpoint: 'https://data.calgary.ca/resource/w5te-dpz7.json' 
  }
}
