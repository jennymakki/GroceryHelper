document.getElementById('viewIngredientsButton').addEventListener('click', function() {
    const recipes = [
       {
            name: 'Köttfärssås',
            ingredients: ['1000 g spagetti', '1000 g blandfärs', '1 gullök', '3 vitlöksklyftor', '3 tsk salt', '1 tsk paprikapulver', '500 g krossade tomater', '4 msk tomatpuré', '2.5 dl matlagningsgrädde', '1 dl ketchup', '1.5 tsk basilika', '1.5 tsk oregano']
        },
        {
            name: 'Tacos',
            ingredients: ['1 förpackning tacobröd', '500 g nötfärs', '1 gurka', '1 paprika', '300 g Riven ost', '1 burk tacosås', '1 påse tacokrydda', '3 avokado', '2 dl creme fraiche']
        },
      {
            name: 'Pulled Pork',
            ingredients: ['1000 g fläskkarré', '1 msk malen spiskummin', '1 msk rökt paprikapuler', '1 tsk chiliflakes', '0.5 tsk chilipulver', '2 tsk salt,', '1 msk socker', '3 vitlöksklyftor', '33 cl mörk öl', '1 dl bbq-sås']
        },
        {
            name: 'Röd pestokyckling med oliver',
            ingredients: ['1000 g kycklingfilé', '1 gullök', '4 dl grädde', '100 g röd pesto', '2 vitlöksklyftor', '1 dl urkärnade oliver', '500 g spagetti' ]
        },
         {
            name: 'Kikärtswrap med dillig majonnässås',
            ingredients: ['460 g kikärtor', '1 påse tacokrydda', '1 snackpaprika', '1 gurka', '30 g fryst/färsk dill', '1 dl majonnäs', '1 dl matyoghurt', '1 förpackning tacobröd/libabröd',]
        },
        {
            name: 'Tuna Melt',
            ingredients: ['2 burkar tonfisk', '1.5 dl majonnäs', '1 rödlök', '4 tsk japansk soja', '2 msk siracha', '12 skivor ost', '12 skivor bröd']
        },
         {
            name: 'Köttfärslimpa',
            ingredients: ['500 g nötfärs', '2 msk ströbröd', '2 ägg', '0.5 tsk spiskummin', '100 g ost', '1000 g mospotatis']
        },
         {
            name: 'Pizza',
            ingredients: ['500 g krossade tomater', '2 msk olivolja', '1 vitlöksklyftor', '1 tsk basilika', '500 g riven ost', '50 g färsk blå jäst', '2 msk olja', '0.5 msk salt', '550 g vetemjöl', '100 g salamiskivor']
        },
         {
            name: 'Pan Pizza',
            ingredients: ['400 g vetemjöl', '4 g torrjäst', '2 tsk olivolja', '500 g krossade tomater', '2 msk olivolja', '1 vitlöksklyftor', '1 tsk basilika', '500 g riven ost', '100 g salamiskivor']
        },
     {
            name: 'Garlic Butter Roast Chicken',
            ingredients: ['1 hel kyckling', '1 gullök', 'färsk timjan', '50 g smör', '1 msk olivolja', '2 vitlöksklyftor', '1 tsk salt', 'sötpotatispommes (frysta)']
        },
        {
            name: 'Chorizopasta',
            ingredients: ['400 g chorizofärs', '1 schalottenlök', '2 vitlöksklyftor', '1 röd paprika', '2 tomat', '1 msk tomatpuré', '2 dl creme fraiche', '1 msk strösocker', '100 g riven ost', '500 g pasta']
        },
        {
            name: 'Korvstroganoff',
            ingredients: ['550 g falukorv', '1 gullök', '1 msk olja', '3 msk tomatpuré', '2.5 dl matlagningsgrädde', '1 dl mjölk', '1 msk japansk soja', '1 tsk dijonsenap', '4 portioner ris']
        },
        {
            name: 'Fetaostbiffar',
            ingredients: ['500 g blandfärs', '1 ägg', '0.5 tsk timjan', '1 citron', '1 tsk salt', '1 förpackning fetaost', '0.5 gurka', '2 tomat', '1 rödlök', '1 burk tapenad', '1000 g potatis', '1 förpackning tzatziki']
        },
        {
            name: 'Kebab',
            ingredients: ['1 förpacking kebabkött (från Schysst käk)', '1 rödlök', '0.5 gurka', '2 tomat', '1 förpackning kebabbröd', '1 flaska kebabsås', '500 g pommes']
        },
        {
            name: 'Club Sandwich',
            ingredients: ['1 förpackning färdig kyckling', '1 paket bacon', '1 tomat', '700 g rostbröd', 'romansallad', '1 dl majonnäs']
        },
        {
            name: 'Pasta med krämig ost- och skinksås',
            ingredients: ['500 g gemelli', '1 gullök', '2.5 dl matlagningsgrädde', '1.5 dl mjölk', '2 tsk majsstärkelse', '1 kycklingbuljongtärning', '350 g strimlad skinka', '1.5 dl riven ost',]
        },
        {
            name: 'Ost och skinkpaj',
            ingredients: ['3 dl vetemjöl', '100 g smör', '1 gullök', '150 g rökt skinka', '3 ägg', '3 dl vispgrädde', '3 dl riven ost',]
        },
        {
            name: 'Kycklingfärsgryta',
            ingredients: ['200 g potatis', '300 g palsternacka', '300 g morötter', '200 g chaminjoner', '1 schalottenlök', '3 msk kycklingfond', '500 g kycklingfärs', '2 dl creme fraiche'],
        },
        {
            name: 'Pestolax med pasta',
            ingredients: ['500 g tagliatelle', '200 g gravad/rökt lax', '100 g pesto', '2 dl creme fraiche']
        },
        {
            name: 'Citronlax med potatis',
            ingredients: ['700 g lax', '3 krm citronpeppar', '0.5 tsk salt', '1 citron', '2 dl grädde', '1000 g mospotatis']
        },
         {
            name: 'Schnitzel med pommes', 
            ingredients: ['4 kycklingbröstfiléer','2 dl vetemjöl', '2 dl ströbröd', '2 ägg', '1 liter olja att fritera i', '1000 g potatis'],
        },
        {
            name: 'Carbonara',
            ingredients: ['1 förpackning tärnad Guanciale', '2 vitlöksklyftor', '500 g spagetti', '4 ägg', '85 g riven parmesan']
        },
         {
            name: 'Lasagne',
            ingredients: ['2 gullök', '2 vitlöksklyftor', '500 g nötfärs', '4 msk tomatpuré', '1 tsk torkad timjan', '1 tsk torkad rosmarin', '390 g krossade tomater', '1 köttbuljongtärning', 'torkade lasagneplattor', '100 g smör', '6 msk vetemjöl', '10 dl mjölk', '2 dl parmesan']
        },
        {
            name: 'Wallenbergare',
            ingredients: ['500 g kycklingfärs', '1 tsk salt', '2 krm malen vitpeppar', '2 ägg', '1 dl vispgrädde', '1000 g mospotatis', '1 förpackning frysta gröna ärtor', '150 g smör']
        },
        {
            name: 'Hamburgare',
            ingredients: ['4 frysta hamburgare', '500 g pommes', '4 hamburgarebröd', '1 burk inlagd gurka', '1 dl majonnäs', '1 dl bbq-sås', '1 förpackning hamburgarost']
        },
        {
            name: 'Korv med bröd',
            ingredients: ['6 grillkorv', '6 korvbröd', '500 g pommes']
        },
        {
            name: 'Chicken drumsticks med pommes',
            ingredients: ['1 förpackning chicken drumsticks (frysta)', '500 g pommes']
        },
        {
            name: 'Entrecôte med potatisgratäng',
            ingredients: ['500 g entrecôte', 'Sås till entrecôte', '900 g potatis', '3 vitlöksklyftor', '2.5 dl vispgrädde', '5 dl mjölk', '2.5 tsk salt', '2 dl riven ost']
        },
        {
            name: 'Bamsebiff',
            ingredients: ['500 g nötfärs', '2 msk potatismjöl', '4 dl matlagningsgrädde', '1 msk kinesisk soja', '1k g mospotatis', '250 g morötter']
        },
        {
            name: 'Ribs med cornbread och coleslaw',
            ingredients: ['Texas Longhorn Ribs', '1 förpackning coleslaw', '125 g smör', '1.5 dl socker', '2 ägg', '2.5 dl fil', '2.5 dl vetemjöl', '2.5 dl majsmjöl']
        },
        {
            name: 'Fish and chips',
            ingredients: ['1 förpackning frysta fiskpanetter', '1 förpackning pommes']
        },
        {
            name: 'Tikka masala med naanbröd',
            ingredients: ['1 förpackning färdig kyckling', '1 burk tikka masala', '3 dl ris', '1 påse naanbröd']
        },
        {
            name: 'Tunnbrödsrulle',
            ingredients: ['4 grillkorvar', '4 tunnbröd', '200 g räksallad', '2 msk rostad lök', '4 portioner pulvermos']
        },
        {
            name: 'Chili con carne',
            ingredients: ['2 gullök', '350 g nötfärs', '2 vitlöksklyftor', '1 msk japansk soja', '1 burk hela tomater', '2 burkar vita bönor i tomatsås', '1 påse nachochips']
        },
        {
            name: 'Kycklingköttbullar i kokosmjölk',
            ingredients: ['800 g kycklingfärs', '2 salladslökar', '3 vitlöksklyftor', '1 msk riven ingefära', '1 msk fisksås', '1 dl ströbröd', '1 ägg', '2 msk röd curry', '400 g kokosmjölk', '1 kycklingbuljongtärning', '6 dl ris']
        },
        {
            name: 'Makaronipudding',
            ingredients: ['4 dl idealmakaroner', '1 gullök', '250g rimmat sidfläsk', '2 dl riven ost', '3 ägg', '2.5 dl vispgrädde', '2.5 dl mjölk']
        },
        {
            name: 'Tacopaj',
            ingredients: ['3 dl gräddfil', '1 påse nachochips', '1 dl skivade jalapenos', '2 dl creme fraiche paprika & chili', '150 g riven ost', '1 påse tacokrydda', '2 dl creme fraiche', '250 g körsbärstomater', '500 g nötfärs', '150 g smör']
        },
        {
            name: 'Stuvade makaroner med falukorv', 
            ingredients: ['5 dl idealmakaroner', '500 g falukorv', '1 liter mjölk']
        },
        {
            name: 'Drunken Noodles',
            ingredients: ['180 g risnudlar', '400 g kycklingfilé', '1 dl ostronsås', '2 msk fisksås', '1 msk kinesisk soja', '2 vitlöksklyftor', '500 g wokmix'],
        },
        {
            name: 'Kyckling med grön pesto i ugn',
            ingredients: ['600 g kycklingfilé','2 dl vispgrädde', '1 dl grön pesto', '500 g cocktailtomater', '500 g spagetti']
        },
        {
            name: 'Sushi',
            ingredients: ['6 dl sushiris', '1 dl risvinäger', '2 förpackningar noriark', '400 g sushilax', '2 avokado', '1 dl majonnäs', '1 gurka', '1 förpackning crabsticks', '100 g färskost']
        },
        {
            name: 'Pad thai',
            ingredients: ['180 g risnudlar', '400 g kycklingfilé', '300 g vitkål', '1 morot', '1 ägg', '1 flaska woksås', '1 dl jordnötter']
        },
        {
            name: 'Broccolibiffar',
            ingredients: ['1000 g broccoli (frysta eller färska)', '2.5 dl ströbröd', '3 ägg', '200 g riven ost', '1 tsk gurkmeja', '1 msk curry', '1 msk paprikapulver', '3 dl creme fraiche', '1 dl majonnäs', '3 msk rödlök', '1.5 tsk örtsalt', '1 msk senap', '1 påse pommes']
        },
        {
            name: 'Cannelloni med salsicciafyllning',
            ingredients: ['300 g pasta cannelloni', '2 vitlöksklyftor', '500 g mascarpone', '80 g ost', '600 g salsicciafärs', '500 g passerade tomater', '2 tsk torkad timjan', '0.5 dl olivolja', '0.5 dl vitt vin', '1 kruka färsk basilika', '2 mozzarellaostar']
        },
        {
            name: 'Kreolsk gryta',
            ingredients: ['500 g fläskfilé', '240 g kabanoss', '2 röda paprika', '1 vitlöksklyftor', '5 dl vispgrädde', '2dl köttbuljong', '1 dl cornichons', '1 dl urkärnade svarta oliver', '1 dl syltlök', '3 tsk majsstärkelse', '1 kruka persilja', '6 dl ris']
        },
        {
            name: 'Broccolisoppa',
            ingredients: ['1 gullök', '300 g potatis', '250 g broccoli', '9 dl grönsaksbuljong', '2.5 dl matlagningsgrädde']
        },
        {
            name: 'Saffranskryddad fisksoppa med lax och torsk',
            ingredients: ['2.5 dl vitt vin', '140 g handskalade räkor', '1 dl creme fraiche', '0.5 g saffran', '3 msk fiskfond', '1 tsk basilika', '1 tsk timjan', '300 g laxfilé', '370 g torskfilé', '1 purjolök', '2.5 dl matlagningsgrädde', '1 vitlöksklyftor', '1 dl majonnäs']
        },
        {
            name: 'Boeuf Bourguignon med potatismos',
            ingredients: ['1000 g högrev', '200 g rökt sidfläsk', '2 schalottenlök', '3 vitlöksklyftor', '70 g morötter', '1.5 msk tomatpuré', '100 g smör', '2 msk vetemjöl', '5 dl rödvin', '2 msk kalvfond', '0.5 tsk timjan', '3 lagerblad', '1 kg mospotatis', '250 g steklök', '400 g färska chaminjoner']
        },
        {
            name: 'Morotsplättar med fetaoströra och zucchinisallad',
            ingredients: ['400 g morötter', '2 ägg', '1.5 dl mjölk', '1 dl vetemjöl', '1 msk färsk oregano', '75 g fetaost', '1 dl creme fraiche', '1 påse pommes']
        },
        {
            name: 'Krämig potatis- och purjolökssoppa',
            ingredients: ['600 g potatis', '1 purjolök', '1 tsk timjan', '10 dl grönsaksbuljong', '3 dl vispgrädde', '1 förpackning bacon']
        },
        {
            name: 'Lasagnette',
            ingredients: ['1 gullök', '2 selleristjälkar', '2 morötter', '3 vitlöksklyftor', '500 g nötfärs', '1 msk basilika', '1 msk oregano', '400 g krossade tomater', '400 g passerade tomater', '300 g lasagnette-pasta eller fjärilspasta', '2 dl creme fraiche', '200 g riven ost']
        },
        {
            name: 'Yakitorikyckling med ris',
            ingredients: ['2 msk japansk soja', '1 vitlöksklyftor', '2 msk mirin', '1 msk ljus risvinäger', '1 msk ingefära', '1 dl farinsocker', '3 tsk majsstärkelse', '400 g kycklinglårfilé utan ben', '2 st salladslök', '1 msk sesamfrön', '3 dl ris'],
        },
        {
            name: 'Kycklingsoppa',
            ingredients: ['700 g kycklinglår med ben', '1 dl bladpersilja', '1 krm vitpepparkorn', '2 lagerblad', '200 g potatis', '2 gullök', '1.5 morot', '150 g rotselleri', '1 palsternacka', '150 g kålrot', '1 purjolök']
        },
        {
            name: 'Linsgryta',
            ingredients: ['1 gullök', '2 vitlöksklyftor', '2 morötter', '1 tsk sambal oelek', '1 msk curry', '2 msk tomatpuré', '1 burk krossade tomater','2 msk grönsaksbuljong', '2.5 dl creme fraiche', '2 dl röda linser']
        },
        {
            name: 'Lax med teriyakisås och nudlar',
            ingredients: ['500 g laxfilé', '2 dl teriyakisås', '0.5 dl sesamfrön', '200 g äggnudlar', '2 salladslök']
        },
        {
            name: 'Kyckling i röd curry med grönsaker',
            ingredients: ['4 dl ris', '0.5 gullök', '200 g morötter', '0.5 zucchini', '0.5 paprika', '550 g kycklingfilé', '16 g röd curry', '400 ml kokosmjölk']
        },
        {
            name: 'Citronpasta med smörstekt fisk',
            ingredients: ['340 g tagliatelle', '2 vitlöksklyftor', '2.5 dl vispgrädde', '1 citron', '500 g torsk']
        },
        {
            name: 'Turkisk kebab med tomatsallad',
            ingredients: ['500 g nötfärs', '2 dl matyoghurt', '1 ägg', '1 vitlöksklyftor', '1 tsk spiskummin', '4 tomater', '1 rödlök', '3 msk hackad mynta', '2 msk olivolja', '1 msk citronsaft', '300 g bulgur']
        },
        {
            name: 'Fläskytterfilégryta med soltorkade tomater',
            ingredients: ['800 g potatis', '500 g fläskytterfilé', '2 dl matlagningsgrädde', '1 dl vatten', '1.5 msk kycklingfond', '50 g soltorkade tomater', '1 tsk curry', '15 g gräslök', '125 g salta jordnötter']
        },
        {
            name: 'Kycklingpasta med soltorkade tomater',
            ingredients: ['340 g tagliatelle', '120 g soltorkade tomater', '550 g kycklingfilé', '2 vitlöksklyftor', '3 dl vispgrädde', '25 g basilika', '65 g bladspenat']
        },
        {
            name: 'Kycklingfärsgryta med tacokrydda',
            ingredients: ['400 g potatis', '300 g morötter', '0.5 purjolök', '0.5 rödlök', '500 g kycklingfärs', '40 g tacokrydda', '1 dl matlagningsgrädde', '50 g färskost', '390 g krossad tomat', '1 avokado', '250 g körsbärstomater']
        },

        {
            name: 'Kylskåpsplåt',
            ingredients: ['1 morot', '1 palsternacka', '100 g potatis', '1 rödlök', '2 vitlöksklyftor', '1 förpackning färdig kyckling', '1 påse tacomix', '1 dl majs', '50 g riven ost', 'tacosås', '2 dl gräddfil']
        },

        {
            name: 'Musslor i vitt vin',
            ingredients: ['1 kg blåmusslor', '4 schalottenlök', '2 vitlöksklyftor', '1 kruka persilja', '25 g smör', '2.5 dl vitt vin', '1 baugette']
        },

        {
            name: 'Bakad potatis toppad med skagenröra',
            ingredients: ['4 bakpotatisar', '25 g smör', '200 g skagenröra']
        },

        {
            name: 'Oxfilé med hasselbackspotatis',
            ingredients: ['800 g potatis', '50 g smör', '2 msk ströbröd', '400 g oxfilé', 'en förpackning bearneisesås']
        },

        {
            name: 'Gryta med ölkorv och örter',
            ingredients: ['600 g skinkstek', '100 g ölkorv', '2 rödlök', '1 msk tomatpuré', '2 msk smör', '1 dl rödvin', '1 msk kinesisk soja', '1 msk kalvfond', '3 dl vispgrädde', '1 tsk oregano', '250 g brysselkål', '800 g potatis', '25 g smör', '1 dl mjölk', '1 dl riven parmesan']
        }, 

        {
            name: 'Shepherds pie',
            ingredients: ['1000 g potatis', '2 dl matlagningsgrädde', '1 ägg', '50 g smör', '1 purjolök', '200 g riven cheddarost', '450 g köttfärs', '2 msk worcestershiresås', '1 msk soja', '1 ägg'],
        },

        {
            name: 'Broccoli Casserole',
            ingredients: ['1 burk krämig svampsoppa', '2.5 dl gräddfil', '3.5 dl riven cheddarost', '1 gullök', '1 kg fryst broccoli']
        },

        {
            name: 'Sallad med varmrökt lax, ägg, avokado och bulgur',
            ingredients: ['300 g varmrökt lax', '3 avokado', '3 ägg', '2 dl bulgur', 'en påse bladsallad', '1 dl majonnäs, 2 vitlöksklyftor', '1 dl matyogurt']
        },

        {
            name: 'Mormors köttbullar',
            ingredients: ['500 g köttfärs', '0.5 dl ströbröd', '1.5 dl vispgrädde', '1.2 kg potatis', '2 tsk salt', '1 tsk socker', '2 krm vitpeppar', 'kryddpeppar', '1 ägg', '0.5 köttbuljongtärning', '2 msk vetemjöl', '1.5 tsk japansk soja']
        },

        {
            name: 'Thai Red Curry Chicken Soup', 
            ingredients: ['1 tsk kokosolja', '1 gullök', '1 röd chili', '3 vitlöksklyftor', '2 msk färsk ingefära', '115 ml röd curry paste', '1 burk kokosmjölk', '2 kycklingbuljongtärningar', '1 kg kycklinglårfilé', '3 msk fisksås', '1 lime', 'färsk koriander', 'färsk thai basilika', '400 g risnudlar']
        },

        {
            name: 'Chiligryta',
            ingredients: ['1 kg högrev', '200 g benmärg', '50 g smör', '3 stora gullök', '10 vitlöksklyftor', '450 g spetspaprika', '2 torkad chipotle', '1 röd chili', '1 habanero', '3 Guinness', '1 köttbuljongtärning', '2 msk kinesisk soja', '0.5 msk salt', 'torkad chilikrydda', '1 msk worcestershiresås', '2 msk oxfond', '300 g nachochips', '5 avokado', '2 dl creme fraiche']
        }

    ];
    let selectedIngredients = new Map();

    // Regular expression to match quantities (with or without units)
    const quantityRegex = /^(\d+\.?\d*)([a-zA-Z]+)?/;

    // Loop through all the recipes and check if the corresponding checkbox is checked
    recipes.forEach((recipe, index) => {
        const checkbox = document.getElementById(`recipe${index + 1}`);
        if (checkbox && checkbox.checked) {
            // Loop through the ingredients of the selected recipe
            recipe.ingredients.forEach(ingredient => {
                // Match the ingredient against the regex to extract quantity and name
                const match = ingredient.match(quantityRegex);
                
                let quantity = '1';  // Default quantity if no quantity found
                let name = ingredient;  // Default to whole ingredient if no match
                
                if (match) {
                    // If a match is found, we extract the quantity and the name
                    quantity = match[1];  // The number part of the quantity
                    name = ingredient.replace(match[0], '').trim();  // The rest is the name
                }

                // Check if name contains a number and remove it for consistency
                if (/\d/.test(name)) {
                    name = name.replace(/\d+/g, '').trim();  // Remove digits, keeping just the ingredient name
                }

                // If the ingredient already exists in the map, add the quantity
                if (selectedIngredients.has(name)) {
                    // Get current quantity (assuming it's a valid number)
                    let currentQuantity = selectedIngredients.get(name);
                    // Add the new quantity to the current one
                    let newQuantity = parseFloat(currentQuantity) + parseFloat(quantity);
                    selectedIngredients.set(name, newQuantity + ' ' + name);
                } else {
                    // Otherwise, set the quantity and ingredient name
                    selectedIngredients.set(name, quantity + ' ' + name);
                }
            });
        }
    });

    // Display the ingredients list
    let ingredientsHTML = '<ul>';
    selectedIngredients.forEach((quantity, ingredient) => {
        ingredientsHTML += `<li>${quantity}</li>`;
    });
    ingredientsHTML += '</ul>';

    document.getElementById('ingredientsList').innerHTML = ingredientsHTML;

    document.getElementById('ingredientsList').classList.add('show');

    document.getElementById('ingredientsList').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('copyListButton').addEventListener('click', function() {
    let listItems = document.querySelectorAll('#ingredientsList li');
    let textToCopy = Array.from(listItems).map(item => item.textContent).join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Listan har kopierats!');
    }).catch(err => {
        console.error('Misslyckades med att kopiera:', err);
    });
});

document.getElementById('addItemButton').addEventListener('click', function() {
    let input = document.getElementById('newItem');
    let newItemText = input.value.trim();

    if (newItemText !== '') {
        let newItem = document.createElement('li');
        newItem.textContent = newItemText;
        document.getElementById('ingredientsList').appendChild(newItem);
        
        input.value = '';
        showToast('Ingrediens tillagd!');
    } else {
        showToast('Skriv något först!');
    }
});

function showToast(message) {
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast-message';
    
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100); 

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300); 
    }, 2000); 
}

document.getElementById('viewIngredientsButton').addEventListener('click', function() {
    
    const moreItems = document.getElementById('moreItems');
    
    if (moreItems.style.display === 'none' || moreItems.style.display === '') {
        moreItems.style.display = 'block'; 
    } 
});

// Lyssna på alla klick på info-ikoner
document.querySelectorAll(".recipe-icon").forEach(icon => {
    icon.addEventListener("click", function() {
      let modalId = this.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "block";
    });
  });
  
  // Hantera stängning av modaler
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      let modalId = this.getAttribute("data-modal");
      document.getElementById(modalId).style.display = "none";
    });
  });
  
  // Stäng modalen om användaren klickar utanför modal-innehållet
  window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  });