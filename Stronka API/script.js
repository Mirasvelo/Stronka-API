document.addEventListener('DOMContentLoaded', function () {
// Ta linia kodu ustawia nasłuchiwanie na zdarzenie DOMContentLoaded. Zdarzenie to występuje, gdy przeglądarka zakończyła parsowanie dokumentu HTML. Kod wewnątrz funkcji będzie wykonywany dopiero po pełnym załadowaniu strony.

//kalkulator dowozu cateringu
    const cateringBtn = document.getElementById('cateringBtn');
// Pobiera element o identyfikatorze "cateringBtn" (przycisk do uruchamiania kalkulatora) i przypisuje go do zmiennej cateringBtn
    
    const kilometersInput = document.getElementById('kilometersInput');
// Pobiera element o identyfikatorze "kilometersInput" (pole tekstowe do wprowadzania liczby km) i przypisuje go do zmiennej kilometersInput
    
    const costOutput = document.getElementById('costOutput');
// Pobiera element o identyfikatorze "costOutput" (miejsce, gdzie będzie wyświetlony koszt dowozu cateringu) i przypisuje go do zmiennej costOutput.

    cateringBtn.addEventListener('click', function () {
        const kilometers = parseFloat(kilometersInput.value);
// Dodaje nasłuchiwanie zdarzenia kliknięcia na przycisku "cateringBtn". Po kliknięciu uruchamiana jest funkcja obsługująca logikę kalkulatora.

/* const kilometers = parseFloat(kilometersInput.value): 
Pobiera wartość wpisaną w polu tekstowym "kilometersInput", konwertuje ją na liczbę zmiennoprzecinkową za pomocą parseFloat i przypisuje wynik do zmiennej kilometers.*/


// sprawdzenie czy wartość jest dodatnia
        if (isNaN(kilometers) || kilometers < 0) 
        // Sprawdza, czy wartość kilometers nie jest liczbą (isNaN(kilometers)) lub jest mniejsza niż zero (kilometers < 0). Warunek ten jest prawdziwy, gdy użytkownik podał nieprawidłową wartość, tzn. wartość, która nie jest liczbą lub jest ujemna.
        
        {
            costOutput.textContent = 'Podaj poprawną, liczbę kilometrów.';
        } else if (kilometers == 0) {
            costOutput.textContent = 'Odbiór osobisty.';
        } else {
            const cateringCost = calculateCateringCost(kilometers);
            costOutput.textContent = `Koszt dowozu cateringu: ${cateringCost.toFixed(2)} zł`;
        }
//  Ustawia tekst w elemencie "costOutput" na informację o koszcie dowozu cateringu. Wartość toFixed(2) ogranicza liczbę miejsc po przecinku do dwóch, co oznacza, że koszt zostanie wyświetlony z dwiema cyframi po przecinku.

    });

    function calculateCateringCost(kilometers) {
        const costPerKilometer = 4;
        return kilometers * costPerKilometer;
    }
});
