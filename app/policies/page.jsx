import { policyData } from "./Component/PolicyData";
import PolicyCard from "./Component/PolicyCard";

export default function page() {
  return (
    <>
      <div>
        {policyData.map((policy) => (
          <PolicyCard
            key={policy.id}
            policy={policy}
          />
        ))}
      </div>
    </>
  );
}
