const data = [
    {
        img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
        title: 'Wedding',
        rows: 2,
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1586910061591-5db12e5e6e27',
        title: 'Pregnant',
        rows: 2,
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1501901609772-df0848060b33',
        title: 'Couple',
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1566780592041-0a2e69c5ef09',
        title: 'Pregnant',
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1543932927-a9def13a0e7c',
        title: 'Couple',
        rows: 2,
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a',
        title: 'Wedding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1612767969528-5448a20175d5',
        title: 'Pregnant',
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1629129592348-d2c2f7ddce90',
        title: 'Pregnant',
        rows: 3,
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1630305130592-210da48f151e',
        title: 'Baby',
        rows: 2,
        cols: 2,
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1603298624547-e38905ce21d7',
        title: 'Baby',
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
        title: 'Wedding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1583086762675-5a88bcc72548',
        title: 'Baby',
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1566780760836-c405d35230b1',
        title: 'Pregnant',
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9',
        title: 'Baby',
        cols: 2,
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1625238967691-b36b2d852b33',
        title: 'Pregnant',
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad',
        title: 'Couple',
        rows: 2,
        cols: 2,
        category: 'couple',
        objectFit: 'cover'
    },
    {
        img: 'https://images.unsplash.com/photo-1546015720-b8b30df5aa27',
        title: 'Pregnant',
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1556982971-7da0c36e9042',
        title: 'Pregnant',
        rows: 2,
        category: 'pregnant',
        objectFit: 'cover'
    },
    {
        img: 'https://images.unsplash.com/photo-1609151162377-794faf68b02f',
        title: 'Weeding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1457342813143-a1ae27448a82',
        title: 'Pregnant',
        cols: 2,
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
        title: 'Baby',
        cols: 2,
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1501631259223-89d4e246ed23',
        title: 'Couple',
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f',
        title: 'Weeding',
        rows: 2,
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1605635822825-c338cce6a4e7',
        title: 'Pregnant',
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1640018641090-1eea978fe1dc',
        title: 'Pregnant',
        cols: 2,
        rows: 2,
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/photo-1525206809752-65312b959c88',
        title: 'Couple',
        rows: 2,
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1617331140180-e8262094733a',
        title: 'Baby',
        rows: 2,
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1606216794079-73f85bbd57d5',
        title: 'Weeding',
        rows: 2,
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1503516459261-40c66117780a',
        title: 'Couple',
        cols: 2,
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1497489210148-2363a93ed1c7',
        title: 'Pregnant',
        cols: 2,
        category: 'pregnant',
    },
    {
        img: 'https://images.unsplash.com/flagged/photo-1566755395267-86735b23d097',
        title: 'Weeding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1492176861288-6b481cfad893',
        title: 'Weeding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1625038032515-308ab14d10b9',
        title: 'Weeding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1583939411023-14783179e581',
        title: 'Weeding',
        cols: 2,
        rows: 2,
        category: 'wedding',
        objectFit: 'cover'
    },
    {
        img: 'https://images.unsplash.com/photo-1514415008039-efa173293080',
        title: 'Couple',
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8',
        title: 'Baby',
        rows: 2,
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg',
        title: 'Couple',
        cols: 2,
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1439539698758-ba2680ecadb9',
        title: 'Weeding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1535571393765-ea44927160be',
        title: 'Baby',
        cols: 2,
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1596252732610-fce5ac542f8e',
        title: 'Baby',
        category: 'baby',
    },
    {
        img: 'https://images.unsplash.com/photo-1595662000432-f8cdba893fa4',
        title: 'Weeding',
        category: 'wedding',
    },
    {
        img: 'https://images.unsplash.com/photo-1449495169669-7b118f960251',
        title: 'Couple',
        category: 'couple',
    },
    {
        img: 'https://images.unsplash.com/photo-1608365151231-7dbed3034787',
        title: 'Baby',
        cols: 2,
        category: 'baby',
    },
];
export default data;