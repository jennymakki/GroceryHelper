document.getElementById('viewIngredientsButton').addEventListener('click', function() {
    const recipes = {
        recipe1: {
            name: 'Köttfärssås',
            ingredients: ['1kg spagetti', '1kg blandfärs', '1 gullök', '3 vitlöksklyftor', '3tsk salt', '1 tsk paprikapulver', '500g krossade tomater', '4msk tomatpuré', '2.5dl matlagningsgrädde', '1dl ketchup', '1.5tsk basilika', '1.5tsk oregano']
        },
        recipe2: {
            name: 'Tacos',
            ingredients: ['Tacobröd', '500g nötfärs', 'Gurka', 'Paprika', '300g Riven ost', 'Tacosås', 'Tacokrydda', 'Avokado']
        },
        recipe3: {
            name: 'Pulled Pork',
            ingredients: ['1 kg fläskkarré', '1msk malen spiskummin', '1msk rökt paprikapuler', '1tsk chiliflakes', '0.5 tsk chilipulver', '2tsk salt,', '1msk socker', '3 vitlöksklyftor', '33cl mörk öl', '1dl bbq-sås']
        },
        recipe4: {
            name: 'Röd pestokyckling med oliver',
            ingredients: ['1 kg kycklingfilé', '1 gullök', '4dl grädde', '100g röd pesto', '2 vitlöksklyftor', '1dl urkärnade oliver', '500g spagetti' ]
        },
        recipe5: {
            name: 'Kikärtswrap med dillig majonnässås',
            ingredients: ['460 g kikärtor', '40g tacokrydda', '1 snackpaprika', '0.5 gurka', '30g fryst/färsk dill', '1dl majonnäs', '1dl matyoghurt', 'tacobröd/libabröd',]
        },
        recipe6: {
            name: 'Tuna Melt',
            ingredients: ['2 burkar tonfisk', '1.5dl majonnäs', '1 liten rödlök', '4 tsk japansk soja', '2 msk siracha', '12 skivor ost', '12 skivor bröd']
        },
        recipe7: {
            name: 'Köttfärslimpa',
            ingredients: ['500g nötfärs', '2msk ströbröd', '2 ägg', '0.5tsk spiskummin', '100g ost', '1kg mospotatis']
        },
        recipe8: {
            name: 'Pizza',
            ingredients: ['500g krossade tomater', '2 msk olivolja', '1 klyfta vitlök', '1tsk basilika', '500g riven ost', '50g färsk blå jäst', '2msk olja', '0.5msk salt', '550g mjöl', '100g salamiskivor']
        },
        recipe9: {
            name: 'Pan Pizza',
            ingredients: ['400g vetemjöl', '4g torrjäst', '2tsk olivolja', '500g krossade tomater', '2msk olivolja', '1 klyfta vitlök', '1 tsk basilika', '500g riven ost', '100g salamiskivor']
        },
        recipe10: {
            name: 'Garlic Butter Roast Chicken',
            ingredients: ['1 hel kyckling', '1 liten gullök', 'Färsk timjan', '2 msk smör', '1msk olivolja', '2 vitlöksklyftor', '1tsk salt', 'sötpotatispommes (frysta)']
        },
        recipe11: {
            name: 'Chorizopasta',
            ingredients: ['400g chorizofärs', '1 schalottenlök', '2 vitlöksklyftor', '1 röd paprika', '2 tomater', '1 msk tomatpuré', '2 dl creme fraiche', '1 msk strösocker', '100g riven ost', '500g pasta']
        },
        recipe12: {
            name: 'Korvstroganoff',
            ingredients: ['550g falukorv', '1 gullök', '1 msk olja', '3 msk tomatpuré', '2.5 dl matlagningsgrädde', '1dl mjölk', '1 msk japansk soja', '1 tsk dijonsenap', '4 portioner ris']
        },
        recipe13: {
            name: 'Fetaostbiffar',
            ingredients: ['500g blandfärs', '1 ägg', '0.5 tsk timjan', '1 citron', '1 tsk salt', '1 förpackning fetaost', '0.5 gurka', '2 tomater', '1 liten rödlök', 'tapenad', '1kg potatis', 'tzatziki']
        },
        recipe14: {
            name: 'Kebab',
            ingredients: ['En förpacking kebabkött', '1 rödlök', '0.5 gurka', '2 tomater', 'kebabbröd', 'kebabsås']
        },
        recipe15: {
            name: 'Club Sandwich',
            ingredients: ['1 förpackning färdig kyckling', '1 paket bacon', '1 tomat', '700g rostbröd', 'romansallad', '1dl majonnäs']
        },
        recipe16: {
            name: 'Pasta med krämig ost- och skinksås',
            ingredients: ['500g gemelli', '1 liten gullök', '2.5dl matlagningsgrädde', '1.5dl mjölk', '2tsk majsstärkelse', '1 kycklingbuljong', '350g strimlad skinka', '1.5dl riven ost',]
        },
        recipe17: {
            name: 'Ost och skinkpaj',
            ingredients: ['3dl vetemjöl', '100g smör', '1 gullök', '150g rökt skinka', '3 ägg', '3dl vispgrädde', '3dl riven ost', '']
        },
        recipe18: {
            name: 'Kycklingfärsgryta',
            ingredients: [''],
        },
        recipe19: {
            name: 'Pestolax med pasta',
            ingredients: ['500g tagliatelle', '200g gravad/rökt lax', '100g pest', '2dl creme fraiche']
        },
        recipe20: {
            name: 'Citronlax med potatis',
            ingredients: ['700g lax', '3krm citronpeppar', '0.5 tsk salt', '1 citron', '2dl grädde', '1kg mospotatis']
        },
        recipe21: {
            name: 'Schnitzel med pommes', 
            ingredients: ['4 kycklingbröstfiléer','2dl vetemjöl', '2dl ströbröd', '2 ägg', '1 liter olja att fritera i', '1kg potatis'],
        },
        recipe22: {
            name: 'Carbonara',
            ingredients: ['1 förpackning tärnad Guanciale', '2 vitlöksklyftor', '500g spagetti', '4 äggulor', '85g riven parmesan']
        },
        recipe23: {
            name: 'Lasagne',
            ingredients: ['2 gullök', '2 vitlöksklyftor', '500g nötfärs', '4 msk tomatpuré', '1 tsk torkad timjan', '1 tsk torkad rosmarin', '390g krossade tomater', '1 köttbuljongtärning', 'torkade lasagneplattor', '100g smör', '6msk vetemjöl', '10 dl mjölk', '2dl parmesan']
        },
        recipe24: {
            name: 'Wallenbergare',
            ingredients: ['500g kycklingfärs', '1 tsk salt', '2krm malen vitpeppar', '2 äggulor', '1dl vispgrädde', '1kg mjölig potatis', 'frysta gröna ärtor', '150g smör']
        },
        recipe25: {
            name: 'Hamburgare',
            ingredients: ['4 frysta hamburgare', '500g pommes', '4 hamburgarebröd', 'inlagd gurka', '1dl majonnäs', '1dl bbq-sås', 'hamburgarost']
        },
        recipe26: {
            name: 'Korv med bröd',
            ingredients: ['Korv', 'korvbröd', '500g pommes']
        },
        recipe27: {
            name: 'Chicken drumsticks med pommes',
            ingredients: ['Chicken drumsticks (frysta)', '500g pommes']
        },
        recipe28: {
            name: 'Entrecôte med potatisgratäng',
            ingredients: ['500g entrecôte', 'Sås till entrecôte', '900 g potatis', '3 vitlöksklyftor', '2.5dl vispgrädde', '5dl mjölk', '2.5 tsk salt', '2 dl riven ost']
        },
    };

    let selectedIngredients = [];
    if (document.getElementById('recipe1').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe1.ingredients);
    }
    if (document.getElementById('recipe2').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe2.ingredients);
    }
    if (document.getElementById('recipe3').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe3.ingredients);
    }
    if (document.getElementById('recipe4').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe4.ingredients);
    } 
    if (document.getElementById('recipe5').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe5.ingredients);
    } 
    if (document.getElementById('recipe6').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe6.ingredients);
    } 
    if (document.getElementById('recipe7').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe7.ingredients);
    } 
    if (document.getElementById('recipe8').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe8.ingredients);
    } 
    if (document.getElementById('recipe9').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe9.ingredients);
    } 
    if (document.getElementById('recipe10').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe10.ingredients);
    } 
    if (document.getElementById('recipe11').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe11.ingredients);
    } 
    if (document.getElementById('recipe12').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe12.ingredients);
    } 
    if (document.getElementById('recipe13').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe13.ingredients);
    } 
    if (document.getElementById('recipe14').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe14.ingredients);
    } 
    if (document.getElementById('recipe15').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe15.ingredients);
    } 
    if (document.getElementById('recipe16').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe16.ingredients);
    } 
    if (document.getElementById('recipe17').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe17.ingredients);
    } 
    if (document.getElementById('recipe18').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe18.ingredients);
    } 
    if (document.getElementById('recipe19').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe19.ingredients);
    } 
    if (document.getElementById('recipe20').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe20.ingredients);
    } 
    if (document.getElementById('recipe21').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe21.ingredients);
    } 
    if (document.getElementById('recipe22').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe22.ingredients);
    } 
    if (document.getElementById('recipe23').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe23.ingredients);
    } 
    if (document.getElementById('recipe24').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe24.ingredients);
    } 
    if (document.getElementById('recipe25').checked) {
        selectedIngredients = selectedIngredients.concat(recipes.recipe25.ingredients);
    }

    let ingredientsHTML = '<ul>';
    selectedIngredients.forEach(ingredient => {
        ingredientsHTML += `<li>${ingredient}</li>`;
    });
    ingredientsHTML += '</ul>';

    document.getElementById('ingredientsList').innerHTML = ingredientsHTML;
});