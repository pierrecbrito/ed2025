import Queue from "./Queue";

export const interleaveQueues = (queue1, queue2) => {
    const resultQueue = new Queue(Math.max(queue1.maxSize, queue2.maxSize));
    
    while (!queue1.isEmpty() || !queue2.isEmpty()) {
        if (!queue1.isEmpty()) {
            resultQueue.enqueue(queue1.dequeue());
        }
        if (!queue2.isEmpty()) {
            resultQueue.enqueue(queue2.dequeue());
        }
    }
    
    return resultQueue;
}

export const reverseQueue = (queue) => {
    const reversedQueue = new Queue(queue.maxSize);
    
    function reverseRecursively(q) {
        if (q.isEmpty()) {
            return;
        }
        const element = q.dequeue();
        reverseRecursively(q);
        reversedQueue.enqueue(element);
    }
    
    reverseRecursively(queue);
    return reversedQueue;
}

