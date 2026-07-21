[22.07.2026 0:44] вова жуков: const urlParams = new URLSearchParams(window.location.search);
const item = urlParams.get("item");

const nftList = {
    1: {
        img: "nft1.png",
        title: "Low Rider #0001",
        rarity: "Legendary • 1.0%",
        desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "1 / 100",
        price: "~$90.00"
    },
    2: {
        img: "nft2.png",
        title: "Cyber Frog #0002",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "2 / 100",
        price: "~$45.00"
    },
    3: {
        img: "nft3.png",
        title: "Lucky Cat #0003",
        rarity: "Rare • 7.0%",
        desc: "Манэки-нэко, приносящий удачу владельцу.",
        model: "Gold Shine 3%",
        pattern: "Cherry Blossom 1.1%",
        background: "Soft Pink 2.7%",
        count: "3 / 100",
        price: "~$30.00"
    },
    4: {
        img: "nft1.png",
        title: "Low Rider #0004",
        rarity: "Legendary • 1.0%",
        desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "4 / 100",
        price: "~$90.00"
    },
    5: {
        img: "nft2.png",
        title: "Cyber Frog #0005",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "5 / 100",
        price: "~$45.00"
    },
    6: {
        img: "nft3.png",
        title: "Lucky Cat #0006",
        rarity: "Rare • 7.0%",
        desc: "Манэки-нэко, приносящий удачу владельцу.",
        model: "Gold Shine 3%",
        pattern: "Cherry Blossom 1.1%",
        background: "Soft Pink 2.7%",
        count: "6 / 100",
        price: "~$30.00"
    },
    7: {
        img: "nft1.png",
        title: "Low Rider #0007",
        rarity: "Legendary • 1.0%",
        desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "7 / 100",
        price: "~$90.00"
    },
    8: {
        img: "nft2.png",
        title: "Cyber Frog #0008",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "8 / 100",
        price: "~$45.00"
    },
    9: {
        img: "nft3.png",
        title: "Lucky Cat #0009",
        rarity: "Rare • 7.0%",
        desc: "Манэки-нэко, приносящий удачу владельцу.",
        model: "Gold Shine 3%",
        pattern: "Cherry Blossom 1.1%",
        background: "Soft Pink 2.7%",
        count: "9 / 100",
        price: "~$30.00"
    },
    10: {
        img: "nft1.png",
        title: "Low Rider #0010",
        rarity: "Legendary • 1.0%",
        desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "10 / 100",
        price: "~$90.00"
    },
    11: {
        img: "nft2.png",
        title: "Cyber Frog #0011",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "11 / 100",
        price: "~$45.00"
    },
    12: {
        img: "nft3.png",
        title: "Lucky Cat #0012",
        rarity: "Rare • 7.0%",
        desc: "Манэки-нэко, приносящий удачу владельцу.",
        model: "Gold Shine 3%",
        pattern: "Cherry Blossom 1.1%",
        background: "Soft Pink 2.7%",
        count: "12 / 100",
        price: "~$30.00"
    },
    13: {
        img: "nft1.png",
        title: "Low Rider #0013",
        rarity: "Legendary • 1.0%",
[22.07.2026 0:44] вова жуков: desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "13 / 100",
        price: "~$90.00"
    },
    14: {
        img: "nft2.png",
        title: "Cyber Frog #0014",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "14 / 100",
        price: "~$45.00"
    },
    15: {
        img: "nft3.png",
        title: "Lucky Cat #0015",
        rarity: "Rare • 7.0%",
        desc: "Манэки-нэко, приносящий удачу владельцу.",
        model: "Gold Shine 3%",
        pattern: "Cherry Blossom 1.1%",
        background: "Soft Pink 2.7%",
        count: "15 / 100",
        price: "~$30.00"
    },
    16: {
        img: "nft1.png",
        title: "Low Rider #0016",
        rarity: "Legendary • 1.0%",
        desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "16 / 100",
        price: "~$90.00"
    },
    17: {
        img: "nft2.png",
        title: "Cyber Frog #0017",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "17 / 100",
        price: "~$45.00"
    },
    18: {
        img: "nft3.png",
        title: "Lucky Cat #0018",
        rarity: "Rare • 7.0%",
        desc: "Манэки-нэко, приносящий удачу владельцу.",
        model: "Gold Shine 3%",
        pattern: "Cherry Blossom 1.1%",
        background: "Soft Pink 2.7%",
        count: "18 / 100",
        price: "~$30.00"
    },
    19: {
        img: "nft1.png",
        title: "Low Rider #0019",
        rarity: "Legendary • 1.0%",
        desc: "Редкий Low Rider из первой серии.",
        model: "Dark Roast 2%",
        pattern: "Onigiri 0.4%",
        background: "Coral Red 1.2%",
        count: "19 / 100",
        price: "~$90.00"
    },
    20: {
        img: "nft2.png",
        title: "Cyber Frog #0020",
        rarity: "Epic • 3.0%",
        desc: "Кибер-жаба из лимитированной коллекции.",
        model: "Cyberpunk 12%",
        pattern: "Neon Grid 0.9%",
        background: "Deep Purple 4.1%",
        count: "20 / 100",
        price: "~$45.00"
    },
    // ... и так далее до 100
};

// автогенерация оставшихся NFT (21–100), чтобы не писать вручную
for (let i = 21; i <= 100; i++) {
    const imgIndex = ((i - 1) % 3) + 1; // 1,2,3 по кругу
    const baseTitles = ["Low Rider", "Cyber Frog", "Lucky Cat"];
    const baseRarities = ["Legendary • 1.0%", "Epic • 3.0%", "Rare • 7.0%"];
    const baseDescs = [
        "Редкий Low Rider из первой серии.",
        "Кибер-жаба из лимитированной коллекции.",
        "Манэки-нэко, приносящий удачу владельцу."
    ];

    const idx = (i - 1) % 3;

    nftList[i] = {
        img: nft${imgIndex}.png,
        title: ${baseTitles[idx]} #${String(i).padStart(4, "0")},
        rarity: baseRarities[idx],
        desc: baseDescs[idx],
        model: idx === 0 ? "Dark Roast 2%" : idx === 1 ? "Cyberpunk 12%" : "Gold Shine 3%",
        pattern: idx === 0 ? "Onigiri 0.4%" : idx === 1 ? "Neon Grid 0.9%" : "Cherry Blossom 1.1%",
        background: idx === 0 ? "Coral Red 1.2%" : idx === 1 ? "Deep Purple 4.1%" : "Soft Pink 2.7%",
        count: ${i} / 100,
        price: idx === 0 ? "~$90.00" : idx === 1 ? "~$45.00" : "~$30.00"
    };
}

const nft = nftList[item] || nftList[1];

document.getElementById("nftImage").src = nft.img;
document.getElementById("nftTitle").innerText = nft.title;
document.getElementById("nftRarity").innerText = nft.rarity;
document.getElementById("nftDesc").innerText = nft.desc;
[22.07.2026 0:44] вова жуков: document.getElementById("propModel").innerText = nft.model;
document.getElementById("propPattern").innerText = nft.pattern;
document.getElementById("propBackground").innerText = nft.background;
document.getElementById("propCount").innerText = nft.count;

document.getElementById("nftPrice").innerText = nft.price;