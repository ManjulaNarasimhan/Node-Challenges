function properBracets(S) {
    S = S.split("");
    var stack = [];
    for (var i = 0; i < S.length; i++) {
        var c = S[i];
        if (c == '{' || c == '(' || c == '[') {
            stack.push(c);
            //console.log(":::::::::::", stack)
        } else if (c == '}' || c == ')' || c == ']') {
            var t = stack.pop() + c;          
            console.log(t);
            if (t != "{}" && t != "()" && t != "[]")
                return 0;
        }
        else
            return 0;
    }

    if (stack.length > 0)
        return 0;

    return 1;
};

console.log(properBracets("{[(()]})"));