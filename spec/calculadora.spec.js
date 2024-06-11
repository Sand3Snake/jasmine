describe("Teste Calculadora", function () {
    it("Somas válidas", function () {
        expect(soma(9, 9)).toBe(18);
        expect(soma(1, 2)).toBe(3);
    });
    it("Multiplicações válidas", function () {
        expect(multiplicacao(9, 9)).toBe(81);
        expect(multiplicacao(1, 2)).toBe(2);
    });
    it("Divisões válidas", function () {
        expect(divisao(9, 9)).toBe(1);
        expect(divisao(4, 2)).toBe(2);
    });
    it("Subtrações válidas", function () {
        expect(subtracao(9, 8)).toBe(1);
        expect(subtracao(2, 1)).toBe(1);
    });
    it("Somas válidas", function () {
        expect(soma(9, 9)).toBe(1);
        expect(soma(1, 2)).toBe(3);
    });
});