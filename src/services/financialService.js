async function sumEvents(events){
        events.rows.reduce(
          (total, event) =>
            event.type === "INCOME" ? total + event.value : total - event.value,
          0
        );
}
async function validateTypes(type){
  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    throw { message: "type must be income or outcome" };
  }
}
async function validateValue(value){
  if (value < 0) {
    throw { message: "value cannot be under 0" };
  }
}
const financialService = {
  sumEvents,
  validateTypes,
  validateValue,
};
export default financialService