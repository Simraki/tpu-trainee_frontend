import { makeObservable, observable } from 'mobx'

export class Vacancy {

    name
    careerLevel
    schedule
    salary
    applicationNum
    pubDate

    constructor(name: string, careerLevel: string, schedule: string, salary: string,
                applicationNum = 0, pubDate: string) {

        this.name = name
        this.careerLevel = careerLevel
        this.schedule = schedule
        this.salary = salary
        this.applicationNum = applicationNum
        this.pubDate = pubDate

        makeObservable(this, {
            name: observable,
            careerLevel: observable,
            schedule: observable,
            salary: observable,
            applicationNum: observable,
            pubDate: observable,
        })
    }

}
