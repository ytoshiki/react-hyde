export const itemData = {
  furniture: {
    id: 1,
    categories: {
      sofa: {
        id: 3,
        name: "ソファ・椅子",
        imageUrl: "category1-min.jpg",
        linkUrl: "sofa",
        items: [
          { name: "一人掛けソファ", id: 7, price: 7800, imageUrl: "chair-min.jpg" },
          { name: "ロッキングチェア", id: 8, price: 5200, imageUrl: "chair1-min.jpg" },

          { name: "オットマン", id: 10, price: 12800, imageUrl: "chair3-min.jpg" },
          { name: "二人掛けソファ", id: 11, price: 22800, imageUrl: "chair4-min.jpg" },
          { name: "三人掛けソファ", id: 12, price: 42800, imageUrl: "chair5-min.jpg" },
          { name: "ソファベッド", id: 13, price: 69800, imageUrl: "chair6-min.jpg" }
        ]
      },
      desk: {
        id: 4,
        name: "机・デスク",
        imageUrl: "table-min.jpg",
        linkUrl: "desk",
        items: [
          {
            name: "ウドゥンテーブル",
            id: 14,
            price: 18900,
            imageUrl: "table-min.jpg"
          },
          {
            name: "オフィスデスク",
            id: 15,
            price: 23000,
            imageUrl: "table2-min.jpg"
          },
          {
            name: "リビングテーブル",
            id: 16,
            price: 21900,
            imageUrl: "table3-min.jpg"
          },
          {
            name: "ダイニングテーブル",
            id: 17,
            price: 8900,
            imageUrl: "table4-min.jpg"
          }
        ]
      }
    }
  },
  interior: {
    id: 2,
    categories: {
      plants: {
        id: 5,
        name: "観葉植物",
        imageUrl: "category4-min.jpg",
        linkUrl: "plants",
        items: [
          {
            id: 18,
            name: "デスクプラント",
            price: 1200,
            imageUrl: "interior-min.jpg"
          },
          {
            id: 19,
            name: "ミドルプラント",
            price: 5900,
            imageUrl: "plant-min.jpg"
          },
          {
            id: 20,
            name: "ハワイアンプラント",
            price: 2200,
            imageUrl: "interior1-min.jpg"
          },
          {
            id: 21,
            name: "インテリア植物（各一つ）",
            price: 3200,
            imageUrl: "interior4-min.jpg"
          }
        ]
      },
      light: {
        id: 6,
        name: "ライト・ランプ",
        imageUrl: "category3-min.jpg",
        linkUrl: "light",
        items: [
          {
            id: 22,
            name: "壁掛けランプ",
            price: 4000,
            imageUrl: "interior3-min.jpg"
          },
          {
            id: 23,
            name: "スタンドライト",
            price: 5200,
            imageUrl: "light1-min.jpg"
          },
          {
            id: 24,
            name: "ベッドランプ",
            price: 2990,
            imageUrl: "light-min.jpg"
          },
          {
            id: 25,
            name: "シーリングライト",
            price: 8000,
            imageUrl: "light2-min.jpg"
          }
        ]
      }
    }
  }
}
