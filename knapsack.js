function knapsack_XX(weight, values, capacity) {
    let i = 0;
    let j = 0;
    let result = {
        index1: -1,
        index2: -1,
        total: 0
    };
    let storedVal = 0;
    let total = 0;
    while (i < weight.length) {
        storedVal = weight[i];
        while (j < weight.length) {

            if (weight[i] + weight[j] <= capacity) {
                total = Math.max(total, values[i] + values[j]);
            }

            j++;
        };
        weight.push(...val);
        i++;
    };
    // console.log(total);
};

function knapsack(items, capacity) {
    let totalValue = 0;
    let totalWeight = 0;
    let remainingItems = items.sort((a, b) => {
        let sorted = (b.value / b.weight) - (a.value / a.weight);
        return sorted;
    });
    while (remainingItems.length > 0) {
        console.log("REMAINING:::::", remainingItems);
        const remainingCapacity = capacity - totalWeight;
        remainingItems = remainingItems.filter((item) => {
            return (item.weight <= remainingCapacity);
        });
        if (remainingItems.length === 0) continue;
        const addedItem = remainingItems.shift();
        totalValue = totalValue + addedItem.value;
        totalWeight = totalWeight + addedItem.weight;
    }
    console.log(totalValue.toFixed(2));
};

var w = [3, 1, 2, 2, 1];
var v = [10, 3, 9, 5, 6];
var c = 6;


var items = [{ weight: 3, value: 10 }, { weight: 1, value: 3 }, { weight: 2, value: 9 }, { wweight: 2, value: 5 }, { weight: 1, b: 6 }];
var capacity = 6;

knapsack(items, c)
