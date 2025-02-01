document.getElementById('viewIngredientsButton').addEventListener('click', function() {
    const recipes = [
       {
            name: 'Köttfärssås',
            ingredients: ['1kg spagetti', '1kg blandfärs', '1 gullök', '3 vitlöksklyftor', '3 tsk salt', '1 tsk paprikapulver', '500g krossade tomater', '4 msk tomatpuré', '2.5 dl matlagningsgrädde', '1 dl ketchup', '1.5tsk basilika', '1.5tsk oregano']
        },
        {
            name: 'Tacos',
            ingredients: ['Tacobröd', '500g nötfärs', 'Gurka', 'Paprika', '300g Riven ost', 'Tacosås', 'Tacokrydda', 'Avokado']
        },
      {
            name: 'Pulled Pork',
            ingredients: ['1 kg fläskkarré', '1 msk malen spiskummin', '1 msk rökt paprikapuler', '1 tsk chiliflakes', '0.5 tsk chilipulver', '2 tsk salt,', '1 msk socker', '3 vitlöksklyftor', '33cl mörk öl', '1 dl bbq-sås']
        },
        {
            name: 'Röd pestokyckling med oliver',
            ingredients: ['1 kg kycklingfilé', '1 gullök', '4 dl grädde', '100g röd pesto', '2 vitlöksklyftor', '1 dl urkärnade oliver', '500g spagetti' ]
        },
         {
            name: 'Kikärtswrap med dillig majonnässås',
            ingredients: ['460 g kikärtor', '40g tacokrydda', '1 snackpaprika', '1 gurka', '30g fryst/färsk dill', '1 dl majonnäs', '1 dl matyoghurt', 'tacobröd/libabröd',]
        },
        {
            name: 'Tuna Melt',
            ingredients: ['2 burkar tonfisk', '1.5 dl majonnäs', '1 rödlök', '4 tsk japansk soja', '2 msk siracha', '12 skivor ost', '12 skivor bröd']
        },
         {
            name: 'Köttfärslimpa',
            ingredients: ['500g nötfärs', '2 msk ströbröd', '2 ägg', '0.5 tsk spiskummin', '100g ost', '1kg mospotatis']
        },
         {
            name: 'Pizza',
            ingredients: ['500g krossade tomater', '2 msk olivolja', '1 klyfta vitlök', '1 tsk basilika', '500g riven ost', '50g färsk blå jäst', '2msk olja', '0.5msk salt', '550g mjöl', '100g salamiskivor']
        },
         {
            name: 'Pan Pizza',
            ingredients: ['400g vetemjöl', '4g torrjäst', '2 tsk olivolja', '500g krossade tomater', '2 msk olivolja', '1 klyfta vitlök', '1 tsk basilika', '500g riven ost', '100g salamiskivor']
        },
     {
            name: 'Garlic Butter Roast Chicken',
            ingredients: ['1 hel kyckling', '1 gullök', 'Färsk timjan', '2 msk smör', '1 msk olivolja', '2 vitlöksklyftor', '1 tsk salt', 'sötpotatispommes (frysta)']
        },
        {
            name: 'Chorizopasta',
            ingredients: ['400g chorizofärs', '1 schalottenlök', '2 vitlöksklyftor', '1 röd paprika', '2 tomater', '1 msk tomatpuré', '2 dl creme fraiche', '1 msk strösocker', '100g riven ost', '500g pasta']
        },
        {
            name: 'Korvstroganoff',
            ingredients: ['550g falukorv', '1 gullök', '1 msk olja', '3 msk tomatpuré', '2.5 dl matlagningsgrädde', '1 dl mjölk', '1 msk japansk soja', '1 tsk dijonsenap', '4 portioner ris']
        },
        {
            name: 'Fetaostbiffar',
            ingredients: ['500g blandfärs', '1 ägg', '0.5 tsk timjan', '1 citron', '1 tsk salt', '1 förpackning fetaost', '0.5 gurka', '2 tomater', '1 rödlök', 'tapenad', '1kg potatis', 'tzatziki']
        },
        {
            name: 'Kebab',
            ingredients: ['En förpacking kebabkött', '1 rödlök', '0.5 gurka', '2 tomater', 'kebabbröd', 'kebabsås']
        },
        {
            name: 'Club Sandwich',
            ingredients: ['1 förpackning färdig kyckling', '1 paket bacon', '1 tomat', '700g rostbröd', 'romansallad', '1 dl majonnäs']
        },
        {
            name: 'Pasta med krämig ost- och skinksås',
            ingredients: ['500g gemelli', '1 gullök', '2.5 dl matlagningsgrädde', '1.5 dl mjölk', '2 tsk majsstärkelse', '1 kycklingbuljong', '350g strimlad skinka', '1.5 dl riven ost',]
        },
        {
            name: 'Ost och skinkpaj',
            ingredients: ['3 dl vetemjöl', '100g smör', '1 gullök', '150g rökt skinka', '3 ägg', '3 dl vispgrädde', '3 dl riven ost',]
        },
        {
            name: 'Kycklingfärsgryta',
            ingredients: ['200g potatis', '300g palsternacka', '300g morötter', '200g chaminjoner', '1 schalottenlök', '3 msk kycklingfond', '500g kycklingfärs', '2 dl creme fraiche'],
        },
        {
            name: 'Pestolax med pasta',
            ingredients: ['500g tagliatelle', '200g gravad/rökt lax', '100g pest', '2 dl creme fraiche']
        },
        {
            name: 'Citronlax med potatis',
            ingredients: ['700g lax', '3krm citronpeppar', '0.5 tsk salt', '1 citron', '2 dl grädde', '1kg mospotatis']
        },
         {
            name: 'Schnitzel med pommes', 
            ingredients: ['4 kycklingbröstfiléer','2 dl vetemjöl', '2 dl ströbröd', '2 ägg', '1 liter olja att fritera i', '1kg potatis'],
        },
        {
            name: 'Carbonara',
            ingredients: ['1 förpackning tärnad Guanciale', '2 vitlöksklyftor', '500g spagetti', '4 äggulor', '85g riven parmesan']
        },
         {
            name: 'Lasagne',
            ingredients: ['2 gullök', '2 vitlöksklyftor', '500g nötfärs', '4 msk tomatpuré', '1 tsk torkad timjan', '1 tsk torkad rosmarin', '390g krossade tomater', '1 köttbuljongtärning', 'torkade lasagneplattor', '100g smör', '6 msk vetemjöl', '10 dl mjölk', '2 dl parmesan']
        },
        {
            name: 'Wallenbergare',
            ingredients: ['500g kycklingfärs', '1 tsk salt', '2krm malen vitpeppar', '2 äggulor', '1 dl vispgrädde', '1kg mjölig potatis', 'frysta gröna ärtor', '150g smör']
        },
        {
            name: 'Hamburgare',
            ingredients: ['4 frysta hamburgare', '500g pommes', '4 hamburgarebröd', 'inlagd gurka', '1 dl majonnäs', '1 dl bbq-sås', 'hamburgarost']
        },
        {
            name: 'Korv med bröd',
            ingredients: ['6 grillkorv', '6 korvbröd', '500g pommes']
        },
        {
            name: 'Chicken drumsticks med pommes',
            ingredients: ['Chicken drumsticks (frysta)', '500g pommes']
        },
        {
            name: 'Entrecôte med potatisgratäng',
            ingredients: ['500g entrecôte', 'Sås till entrecôte', '900 g potatis', '3 vitlöksklyftor', '2.5 dl vispgrädde', '5 dl mjölk', '2.5 tsk salt', '2 dl riven ost']
        },
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

    // Add fade-in effect
    document.getElementById('ingredientsList').classList.add('show');

    document.getElementById('ingredientsList').scrollIntoView({ behavior: 'smooth' });
});