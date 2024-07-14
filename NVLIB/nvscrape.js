const bing = require('bing-scraper')
const axios = require('axios')
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const request = require('request')
const FormData = require('form-data')

async function bingImage(query) {
  return new Promise((resolve, reject) => {
    bing.imageSearch({ q: query, enforceLanguage: true }, function(err, resp) {
      if (err) {
        console.log(err)
      } else {
        const result = {
          status: 200,
          author: 'David132',
          ...resp
        }
        resolve(result)
      }
    })
  })
}

async function gptPictures(q) {
  const axios = require("axios")
  let {
    data
  } = await axios.post("https://chat-gpt.pictures/api/generateImage", {
    "captionInput": q,
    "captionModel": "default"
  })
  return data
}

async function chatWithGPT(messages, q) {
  try {
    const nonceValue = JSON.parse(
      cheerio
        .load(await (await axios.get("https://zerogptai.org/")).data)(
          ".mwai-chatbot-container",
        )
        .attr("data-system"),
    ).restNonce;

    const { data } = await axios(
      "https://zerogptai.org/wp-json/mwai-ui/v1/chats/submit",
      {
        method: "post",
        data: {
          botId: "default",
          messages,
          newMessage: q,
          stream: false,
        },
        headers: {
          "X-WP-Nonce": nonceValue,
          "Content-Type": "application/json",
        },
      },
    );
    return data.reply;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data.message;
  }
}

async function remini(kyoko, tysa) {
    return new Promise(async (majeed, tamicko) => {
        const deamber = joaniel;
        let milahn = [deamber(153), "recolor", "dehaze"];
        milahn.includes(tysa) ? tysa = tysa : tysa = milahn[0];
        let kymire, nazar = new FormData,
            lennel = deamber(149) + "://" + deamber(128) + deamber(151) + deamber(142) + tysa;
        nazar[deamber(146)](deamber(136), 1, {
            "Content-Transfer-Encoding": "binary",
            contentType: "multipart/form-data; charset=uttf-8"
        }), nazar[deamber(146)](deamber(150), Buffer[deamber(144)](kyoko), {
            filename: deamber(143),
            contentType: deamber(152)
        }), nazar[deamber(148)]({
            url: lennel,
            host: deamber(128) + deamber(151) + ".ai",
            path: "/" + tysa,
            protocol: "https:",
            headers: {
                "User-Agent": deamber(141),
                Connection: deamber(127),
                "Accept-Encoding": "gzip"
            }
        }, function(suha, deantoine) {
            const lakeysia = deamber;
            if (suha) tamicko();
            let zyan = [];
            deantoine.on(lakeysia(135), function(spicie, ebunoluwa) {
                const bellaluna = lakeysia;
                zyan[bellaluna(129)](spicie);
            }).on("end", () => {
                const camden = lakeysia;
                majeed(Buffer[camden(132)](zyan));
            }), deantoine.on(lakeysia(139), shady => {
                tamicko();
            });
        });
    });
}

module.exports= { bingImage, gptPictures, chatWithGPT, remini }