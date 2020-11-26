function TreeHeight(T) {
    if (T == null)
        return -1;
    return 1 + Math.max(solution(T.l), solution(T.r));
};

