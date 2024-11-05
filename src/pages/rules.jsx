import { useState } from "react";
import ButtonSeconadry from "../components/common/button-secondary";

const Rules = () => {
  const [lang, setLang] = useState("eng");
  const handleLanguage = (val) => {
    setLang(val);
  };
  return (
    <div className="text-text-dark py-2 px-4">
      <div className="flex justify-center py-2  w-full items-center gap-4">
        <div className="w-32">
          <ButtonSeconadry onClick={() => handleLanguage("eng")}>
            English
          </ButtonSeconadry>
        </div>
        <div className="w-32">
          <ButtonSeconadry onClick={() => handleLanguage("hi")}>
            Hindi
          </ButtonSeconadry>
        </div>
      </div>
      {lang === "hi" ? (
        <div>
          <h5 className="text-lg">
            बेट लगाने से पहले कृपया हमारे नियम पढ़ें।
            <strong>
              ** एक बार जब हमारा एक्सचेंज यूजरनेम और पासवर्ड दे देता है, तो
              पासवर्ड बदलने की जिम्मेदारी आपकी होती है।
            </strong>
          </h5>

          <h5 className="text-lg font-bold">1) स्कोर कार्ड नियमों:-</h5>
          <ul className="my-4 px-8">
            <li>
              1.1) इस साइट पर लाइव स्कोर और अन्य डेटा तीसरे पक्ष के फ़ीड से
              प्राप्त किए जाते हैं और समय की देरी और/या गलत हो सकते हैं। यदि आप
              दांव/बेट्स लगाने के लिए इस डेटा पर भरोसा करते हैं, तो आप अपने
              जोखिम पर ऐसा करते हैं। हमारा एक्सचेंज इस डेटा पर निर्भरता के
              परिणामस्वरूप हुए नुकसान की जिम्मेदारी स्वीकार नहीं करता है।
            </li>
            <li>
              1.2) यदि फैंसी परिणाम में कोई विवाद होता है, तो कंपनी का निर्णय
              अंतिम होगा।
            </li>
          </ul>

          <h5 className="text-lg font-bold">2) मैचऑड्स मार्केट नियमों:</h5>
          <ul className="my-4 px-8">
            <li>
              2.1) बेटफेयर और फैंसी बाजारों में, यदि किसी को ग्राउंड कमेंट्री या
              ग्राउंड लाइन या कोर्टसाइडिंग (सट्टेबाजी के दौरान मैदान में होने)
              का उपयोग करने का संदेह है, तो कंपनी सभी जीतने वाले दांव (बिना कोई
              सबूत दिए) को रद्द कर देगी। यह Zero Tolerance policy है और किसी भी
              तर्क पर विचार नहीं किया जाएगा। मैच समाप्त होने के बाद जीतने वाली
              बेट रद्द कर दी जाएगी। कंपनी का निर्णय अंतिम निर्णय होगा।
            </li>
          </ul>

          <h5 className="text-lg font-bold">3) मैचऑड्स मार्केट नियमों:</h5>
          <ul className="my-4 px-8">
            <li>3.1) क्रिकेट: हम बेटफेयर परिणाम का पालन करेंगे।</li>
            <li>3.2) फ़ुटबॉल: हम बेटफ़ेयर परिणाम का पालन करेंगे।</li>
            <li>3.3) टेनिस: हम बेटफ़ेयर परिणाम का पालन करेंगे।</li>
            <li>
              3.4) यदि किसी भी ग्राहक को किसी भी मैच की मैचऑड्स में हेजिंग या
              हेरफेर करते पाया जाता है, तो कंपनी के पास दांव/बेट्स को रद्द करने
              का अधिकार है।
            </li>
            <li>
              3.5) यदि एक्सचेंज गलत परिणाम घोषणा या किसी अन्य कारण से किसी भी
              दांव या बाजार को फिर से स्थापित करता है और यदि खिलाड़ी ने पैसा खो
              दिया है या यदि खिलाड़ी को नकारात्मक शेष राशि मिलती है, तो इस मामले
              में कंपनी उसी के लिए एजेंट से निपटान करेगी, सभी निर्णय पूर्ण और
              अंतिम होंगे, कोई तर्क नहीं सुना जाएगा।
            </li>
            <li>
              3.6) कंपनी मैच के किसी भी बिंदु पर किसी भी घटना के किसी भी दांव
              (केवल जीतने वाले दांव) को रद्द करने का अधिकार सुरक्षित रखती है यदि
              कंपनी का मानना है कि खिलाड़ियों (या तो बल्लेबाज / गेंदबाज) द्वारा
              उस विशेष घटना में कोई धोखाधड़ी / गलत काम किया गया है।
            </li>
            <li>
              3.7) यदि कोई सुपर ओवर है तो सुपर ओवर की मैच बाधाओं का निपटारा
              विजेता टीम के अंतिम परिणाम घोषित होने के बाद किया जाएगा, लेकिन
              सट्टेबाज के मामले में हम उस विशेष बाजार परिणाम के आधार पर विशेष
              सुपर ओवर सट्टेबाज का निपटान या रद्द कर देंगे।
            </li>
          </ul>

          <h5 className="text-lg font-bold">4) बुक-मेकर मार्केट नियमों:</h5>
          <ul className="my-4 px-8">
            <li>
              4.1) किसी भी कारण से किसी भी टीम को फायदा या नुकसान हो रहा होगा,
              हम जुड़े हुए नहीं हैं।
            </li>
            <li>
              4.2) हमारी गलती से गलत टीम का चयन/चुनना होगा, तो बेक और लेज़
              दांव/बेट्स को हटा दिया जाएगा।
            </li>
            <li>4.3) गलत मूल्य के दांव/बेट्स भी रद्द हो जाएंगे।</li>
            <li>
              4.4) यदि एक्सचेंज गलत परिणाम घोषणा या किसी अन्य कारण से किसी भी
              दांव या बाजार को फिर से स्थापित करता है और यदि खिलाड़ी ने पैसा खो
              दिया है या यदि खिलाड़ी को नकारात्मक शेष राशि मिलती है, तो इस मामले
              में कंपनी उसी के लिए एजेंट से निपटान करेगी, सभी निर्णय पूर्ण और
              अंतिम होंगे, कोई तर्क नहीं सुना जाएगा।
            </li>
            <li>
              4.5) कंपनी मैच के किसी भी बिंदु पर किसी भी घटना के किसी भी दांव
              (केवल जीतने वाले दांव) को रद्द करने का अधिकार सुरक्षित रखती है यदि
              कंपनी का मानना है कि खिलाड़ियों (या तो बल्लेबाज / गेंदबाज) द्वारा
              उस विशेष घटना में कोई धोखाधड़ी / गलत काम किया गया है।
            </li>
            <li>
              4.6) यदि दोनों टीमें 6,10,15 ओवरों में समान रन बनाती हैं तो पहले
              बल्लेबाजी करने वाली टीम को विजेता घोषित किया जाएगा...
            </li>
          </ul>

          <h5 className="text-lg font-bold">5) फैंसी / सेशन मार्केट नियमों:</h5>
          <ul className="my-4 px-8">
            <li>
              5.1) एडवांस फैंसी: एडवांस सेशन, प्लेयर रन और सभी फैंसी बेट्स
              प्रत्येक पक्ष में केवल 20 ओवर/50 ओवर फुल मैच के लिए मान्य हैं।
              (कृपया ध्यान दें कि यह शर्त केवल एडवांस फैंसी बेट्स के मामले में
              ही लागू होती है)।
            </li>
            <li>
              5.2) सभी एडवांस फैंसी दांव/बेट्स बाजार/मार्केट को मैच से 60 मिनट
              पहले निलंबित कर दिया जाएगा और इसका सेटलमेंट किया जाएगा।
            </li>
            <li>
              5.3) एडवांस फैंसी और लंबी पहली पारी के लिए केवल मान्य रहेगी।
            </li>
            <li>
              5.4) मैच में खेला जा रहा कुल ओवर का एडवांस बाजार/मार्केट: पूरा मैच
              पूरा होने के बाद हम इस बाजार को व्यवस्थित करेंगे।
            </li>
            <li>
              5.5) मापदंड: हम सेटलमेंट के दौरान दोनों पारियों के लिए केवल
              राउंड-ऑफ ओवर की गणना करेंगे (उदाहरण के लिए: यदि पहली बल्लेबाजी
              करने वाली टीम 17.3, 18.4 या 19.5 पर ऑल आउट हो जाती है तो हम ऐसे
              ओवरों को क्रमशः 17, 18 और 19 के रूप में गिनेंगे और यदि मैच 17.2,
              18.3 या 19.3 ओवर पर समाप्त हो जाता है तो हम इसे क्रमशः 17, 18 और
              19 ओवर के रूप में गिनेंगे ... और यह दोनों पारियों के लिए समान
              रहेगा।
            </li>
            <li>
              5.6) बारिश के मामले में या यदि ओवर कम हो जाता है तो वह
              बाजार/मार्केट रद्द हो जाएगा।
            </li>
            <li>
              5.7) गेंदबाज द्वारा 3 Wkt या उससे अधिक: हम पूरे मैच के पूरा होने
              के बाद इस बाजार/मार्केट को सेटलमेंट करेंगे।
            </li>
            <li>
              5.8) एक बार जब सभी सेशन/फैंसी बाजार/मार्केट पूरे हो जाते हैं और
              उनका सेटलमेंट हो जाता है तो मैच के टाई या रद हो जाने पर भी कोई
              बदलाव नहीं होगा।
            </li>
            <li>
              5.9) सेशन/फैंसी दांव/बेट्स के नियमों के तहत यदि कोई बाजार/मार्केट
              किसी भी कारण से निलंबित/रद हो जाता है और फिर से शुरू नहीं होता है,
              तो पिछले सभी दांव/बेट्स मान्य रहेंगे और हार/जीत दांव/बेट्स बन
              जाएंगे।
            </li>
            <li>
              5.10) अधूरा सेशन/फैंसी के दांव/बेट्स रद्द कर दिया जाएगा लेकिन पूरा
              सेशन/फैंसी सेटल हो जाएगा।
            </li>
            <li>
              5.11) खिलाड़ी के रन / विकेट का गिरना / गेंद से विकेट खोना /
              खिलाड़ी द्वारा कितनी गेंद का सामना करना पड़ता है - ऐसे
              बाजार/मार्केट में उन अंकों पर भी तय किया जाएगा जहां पारी (डी/एल)
              के लिए बारिश के कारण मैच रुक जाता है या 20 ओवर / 50 ओवर पूरे हो
              जाते हैं और साथ ही पूरी पारी के बाद सभी दांव/बेट्स का सेटलमेंट
              किया जाएगा।
            </li>
            <li>
              5.12) सुपर ओवर से संबंधित किसी भी सेशन/फैंसी बाजार/मार्केट को मैच
              के अंत में सेटल किया जाएगा।
            </li>
          </ul>

          <h5 className="text-lg font-bold">6) सामान्य नियम:</h5>
          <ul className="my-4 px-8">
            <li>
              6.1) यदि कंपनी का मानना है कि कोई भी दांव/बेट/विजेता/नुकसान
              धोखाधड़ी गतिविधियों के माध्यम से प्रभावित है, तो कंपनी सभी
              दांव/बेट्स को रद्द करने का अधिकार सुरक्षित रखती है और दांव/बेट्स
              पर कार्रवाई की जाएगी।
            </li>
            <li>
              6.2) यदि किसी टीम को किसी भी कारण से मैच की शुरुआत से पहले मैच
              रद्द कर दिया जाता है, तो सभी दांव/बेट्स रद्द कर दिए जाएंगे और शेष
              राशि को वापस कर दिया जाएगा।
            </li>
            <li>
              6.3) सभी दांव/बेट्स अंत में सटीक स्कोर/संख्याओं के आधार पर सेटल
              किए जाएंगे।
            </li>
            <li>
              6.4) यदि किसी भी दांव/बेट्स के असामान्य मूल्य होते हैं, तो कंपनी
              उसके अधिकार का प्रयोग कर सकती है।
            </li>
            <li>
              6.5) कंपनी किसी भी समय किसी भी दांव/बेट्स को निलंबित, संशोधित या
              रद्द करने का अधिकार सुरक्षित रखती है।
            </li>
            <li>6.6) कंपनी किसी भी विवाद के मामले में अंतिम निर्णय लेगी।</li>
          </ul>
        </div>
      ) : (
        ""
      )}
      {lang === "eng" ? (
        <div>
          <div>
            <h5 className="text-lg">
              PLEASE READ OUR RULES BEFORE PLACING A BET. ** ONCE OUR EXCHANGE
              GIVES USERNAME AND PASSWORD, IT IS YOUR RESPONSIBILITY TO CHANGE
              THE PASSWORD.
            </h5>
            <h5 className="text-lg font-bold">1) SCORECARD RULES:</h5>
            <ul className="my-4 px-8">
              <li>
                1.1) Live scores and other data on this site are sourced from
                third party feeds and may be subject to time delays and/or
                inaccuracies. If you rely on this data to place bets, you do so
                at your own risk. Our exchange does not accept responsibility
                for loss suffered as a result of reliance on this data.
              </li>
              <li>
                1.2) If there is any dispute in Fancy Results, then the
                Company's decision will be final.
              </li>
            </ul>
            <h5 className="text-lg font-bold">2) CHEAT RULES:</h5>
            <ul className="my-4 px-8">
              <li>
                2.1) In Betfair & Fancy markets, if anyone is suspected of using
                ground commentary, ground line, or courtsiding (being in-ground
                while betting), the company will void all winning bets (without
                providing any proof). This is a zero-tolerance policy and no
                arguments will be entertained. The bets will be voided after the
                match is completed. The company's decision will be final.
              </li>
            </ul>
            <h5 className="text-lg font-bold">3) MATCH ODDS RULES:</h5>
            <ul className="my-4 px-8">
              <li>3.1) Cricket: We will follow Betfair results.</li>
              <li>3.2) Soccer: We will follow Betfair results.</li>
              <li>3.3) Tennis: We will follow Betfair results.</li>
              <li>
                3.4) If any client is found hedging or manipulating any match
                odds, the company has the right to void the bets.
              </li>
              <li>
                3.5) If the exchange resettles any bets or markets due to
                incorrect result declaration or any other reason, and if the
                player has lost money or if the player gets a negative balance,
                the company will settle the amount from the agent. All decisions
                will be final, and no arguments will be entertained.
              </li>
              <li>
                3.6) The company reserves the right to void any winning bets of
                any event at any point of the match if the company believes
                there is any cheating or wrongdoing in that particular event by
                the players (either batsman or bowler).
              </li>
              <li>
                3.7) If there is a super over, the match odds of the Super Over
                will be settled after the final result of the winner team is
                declared. In the case of a bookmaker, we will settle or void the
                particular super over bookmaker based on the market's result.
              </li>
            </ul>
            <h5 className="text-lg font-bold">4) BOOK-MAKER MARKET RULES:</h5>
            <ul className="my-4 px-8">
              <li>
                4.1) Due to any reason, if a team is at an advantage or
                disadvantage, we are not concerned.
              </li>
              <li>
                4.2) Wrong team selection by our mistake will result in all back
                and lay bets being deleted.
              </li>
              <li>4.3) Wrong rate bets will also be voided.</li>
              <li>
                4.4) If the exchange resettles any bets or markets due to
                incorrect result declaration or any other reason, and if the
                player has lost money or if the player gets a negative balance,
                the company will settle the amount from the agent. All decisions
                will be final, and no arguments will be entertained.
              </li>
              <li>
                4.5) The company reserves the right to void any winning bets of
                any event at any point of the match if the company believes
                there is any cheating or wrongdoing in that particular event by
                the players (either batsman or bowler).
              </li>
              <li>
                4.6) If both teams score the same number of runs in the 6th,
                10th, or 15th overs, the team that batted first will be declared
                the winner.
              </li>
            </ul>
            <h5 className="text-lg font-bold">5) FANCY:</h5>
            <ul className="my-4 px-8">
              <li>
                5.1) Advance fancy: Advance session, player runs, and all fancy
                bets are only valid for 20 overs/50 overs full match each side.
                (Please note this condition applies only to advance fancy bets).
              </li>
              <li>
                5.2) All advance fancy bets markets will be suspended 60 minutes
                prior to the match and will be settled.
              </li>
              <li>5.3) Advance session and Lambi 1st inning valid only.</li>
              <li>
                5.4) Total match playing over advance: We will settle this
                market after the whole match is completed.
              </li>
              <li>
                5.5) Criteria: We will count only round-off overs for both
                innings while settling. (For example: If the 1st batting team
                gets all out at 17.3, 18.4, or 19.5, we will count such overs as
                17, 18, and 19 respectively. If the match ends at 17.2, 18.3, or
                19.3 overs, we will count that as 17, 18, and 19 overs
                respectively, and this will remain the same for both innings.)
              </li>
              <li>
                5.6) In case of rain or if the over is reduced, this market will
                be voided.
              </li>
              <li>
                5.7) 3 wickets or more by a bowler in match advance: We will
                settle this market after the whole match is completed.
              </li>
              <li>
                5.8) Once all session/fancy bets are completed and settled,
                there will be no reversal even if the match is tied or
                abandoned.
              </li>
              <li>
                5.9) Under the rules of session/fancy bets, if a market gets
                suspended for any reason and does not resume, all previous bets
                will remain valid and become HAAR/JEET bets.
              </li>
              <li>
                5.10) Incomplete session/fancy bets will be cancelled, but the
                complete session will be settled.
              </li>
              <li>
                5.11) In the case of a running match getting cancelled/no
                result/abandoned but the session is complete, it will still be
                settled. Player runs/fall of wicket/wicket lost to ball/how many
                balls faced by player will also be settled at the figures where
                the match gets stopped due to rain, cancellation, abandonment,
                or no result.
              </li>
              <li>
                5.12) If a player gets retired hurt and one ball is completed
                after you place your bets, then all betting till then will
                remain valid.
              </li>
              <li>
                5.13) Should a technical glitch in software occur, we will not
                be held responsible for any losses.
              </li>
              <li>
                5.14) Should there be a power failure or a problem with the
                internet connection at our end and session/fancy markets do not
                get suspended, our decision on the outcome is final.
              </li>
              <li>
                5.15) All decisions relating to the settlement of incorrect
                markets will be taken by management. Management will consider
                all actual facts, and the decision taken will be final.
              </li>
              <li>
                5.16) Any bets deemed suspicious, including bets placed from the
                stadium or from a source at the stadium, may be void at any
                time. The decision of whether to void a particular bet or the
                entire market will remain at the discretion of the company. The
                final decision on whether bets are suspicious will be taken by
                the company, and that decision will be final.
              </li>
              <li>
                5.17) Any sort of cheating bet, matching (passing of funds),
                courtsiding (commentary betting), sharpening, or
                commission-making is not allowed in the company. If any company
                user is caught in any such act, all funds belonging to that
                account will be seized and confiscated. No arguments or claims
                in that context will be entertained, and the decision made by
                the company management will stand as the final authority.
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Rules;
