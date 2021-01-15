import wall from "../../resources/image/WAL.png";
import democratizing_speed_2 from "../../resources/image/democratizing_speed_2.png"
import dashboard_3 from "../../resources/image/dashboard_3.png"

const fakeDataTwo = [
    {
        name:'Future-proof lane enforcement',
        property:[
            'no more transponders',
            'no overhead gantries',
            'over 99.95% accuracy',
            'deployment within weeks',
            'interoperable with any ETC system',
            'solar-powered',
            'wireless data transfer',
        ],
        background_image:wall,
        number:'one',
    },
    {
        name:'Democratizing speed',
        property:[
            'vehicle occupancy verification done right',
            'low friction for users',
            'near-perfect enforcement',
            'high granularity (1, 2, 3, 4+ occupants)'
        ],
        background_image:democratizing_speed_2,
        number:'two',
    },
    {
        name:'Traffic management, reengineered',
        property:[
            'reservation-based traffic management',
            'industry-first predictive dynamic pricing',
            'maximizes vehicle throughput',
            'opens the door to free flow conditions 24/7',
        ],
        background_image: dashboard_3,
        number:'three',
    },
];

export default fakeDataTwo;