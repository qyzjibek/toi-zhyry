import './index.css'

export const PricingTable  = ({sum}) => {
    const monthlyIncomes = [
        {
            name: "😅 Болады",
            sum: sum/12,
            period: 12,
        },
        {
            name: "🤯 Оңай емес",
            sum: sum/24,
            period: 24,
        },
        {
            name: "😵 Қиын",
            sum: sum/36,
            period: 36,
        },]

    const clickHandler = () => {
        window.location.href = "https://e-loan.homecredit.kz/online3/start?iframe_id=asdfjkosdfyu89wrjkyu89sdfr&lang=ru";
    }
    return (
        <div className='plans-wrapper'>
        {monthlyIncomes.map((plan) => (
        <div className='pricing-card'>
                <h3>{plan.name}</h3>
                <h4>${plan.sum}</h4>
                <p>{plan.period} айға бөліп төлеу</p>
                <ul>
                    <li>100 Transaction</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 limit</li>
                </ul>
                <button className='btn blue' onClick={clickHandler}>Сілтеме бойынша өту</button>
            </div>
))}
        </div>
    )
}