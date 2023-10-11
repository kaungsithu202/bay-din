import { useParams } from 'react-router-dom';
import { ANSWERS } from '../data';
import { useMemo } from 'react';
import useQueryState from '../utils/useQueryState';
const Answer = () => {
	const { query } = useQueryState();
	const answerId = query.get('s');
	const { questionId } = useParams();

	const answers = useMemo(
		() =>
			ANSWERS.answers.filter(
				(answer) => answer.questionNo === Number(questionId)
			),
		[]
	);

	const answer = useMemo(
		() => answers.find((ans) => ans.answerNo === Number(answerId)),
		[answerId]
	);

	return (
		<div className="mt-10 text-red-500 text-center">
			<p className="mb-3">Question Number : {questionId}</p>
			<p className="text-base">
				Answer : <span>{answer?.answerResult}</span>
			</p>
		</div>
	);
};

export default Answer;
