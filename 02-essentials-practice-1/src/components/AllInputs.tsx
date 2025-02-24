import Input from "./Input";

export default function AllInputs({ allInputFieldsData }: any): JSX.Element {
    return (
        <div id="user-input">
            <div className="input-group">
                {allInputFieldsData.map((input: any) => <Input inputData={input} />)}
            </div>
        </div>
    );
}