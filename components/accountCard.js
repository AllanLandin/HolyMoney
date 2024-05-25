function AccountCard(props) {
  return (
    <div className="d-flex bg-white rounded-1 flex-column px-2 text-dark">
      <div className="">{props.account.slug}</div>
      <div className="">R${props.account.balance}</div>
    </div>
  );
}

export default AccountCard;
