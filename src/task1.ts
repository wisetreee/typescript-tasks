interface totalPriceProps {
    price: number;
    discount: number;
    isInstallment: boolean;
    months?: number;
}

export const totalPrice = ({ price, discount, isInstallment, months }: totalPriceProps): number => {
    let res = price - (price * discount / 100);
    if (isInstallment && months) {
        res /= months;
    }
    return res;
};
