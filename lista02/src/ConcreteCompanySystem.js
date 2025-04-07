import Queue from './Queue';

class ConcreteCompanySystem {
    constructor(maxLoadsPerDay = 10) {
        this.waitingQueue = new Queue(maxLoadsPerDay);
        this.maxLoadsPerDay = maxLoadsPerDay;
        this.loadsCompleted = 0;
    }

    addTruckDriver(driverName) {
        if (this.loadsCompleted >= this.maxLoadsPerDay) {
            throw new Error("Limite de carregamentos do dia atingido");
        }
        this.waitingQueue.enqueue(driverName);
        return `${driverName} adicionado à fila de espera`;
    }

    removeTruckDriver() {
        if (this.loadsCompleted >= this.maxLoadsPerDay) {
            throw new Error("Limite de carregamentos do dia atingido");
        }
        if (this.waitingQueue.isEmpty()) {
            throw new Error("Nenhum caminhoneiro na fila de espera");
        }
        const driver = this.waitingQueue.dequeue();
        this.loadsCompleted++;
        return `${driver} foi atendido e saiu com o carregamento (${this.loadsCompleted}/${this.maxLoadsPerDay})`;
    }

    hasWaitingDrivers() {
        return !this.waitingQueue.isEmpty();
    }

    isDailyLimitReached() {
        return this.loadsCompleted >= this.maxLoadsPerDay;
    }

    listWaitingDrivers() {
        if (this.waitingQueue.isEmpty()) {
            return "Nenhum caminhoneiro na fila de espera";
        }
        return `Caminhoneiros aguardando: ${this.waitingQueue.toString()}`;
    }

    resetDay() {
        this.waitingQueue.clear();
        this.loadsCompleted = 0;
        return "Sistema resetado para um novo dia";
    }
}

export default ConcreteCompanySystem;