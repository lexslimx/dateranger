
moment().format();


function GenerateMeetingDates(firstMeetingDate, interval, count) {
    console.log('received' + moment(firstMeetingDate, "DD-MM-YYYY"));
    var meetingDates = [];
    if (count == 1) {
        meetingDates.push(firstMeetingDate);
        return meetingDates;
    }
    else if (count == 0) {
        return meetingDates;
    }
    else {
        meetingDates.push(firstMeetingDate);
        for (var index = 1; index <= count; index++) {
            firstMeetingDate = moment(firstMeetingDate).add(interval, 'day');
            meetingDates.push(firstMeetingDate);
        }
    }
    return meetingDates;
}

function UpdateMeetingsPreview() {
    document.getElementById("meetingsPreviewList").innerHTML = "";
    var startDateString = document.getElementById('StartDate').value;
    var interval = document.getElementById('Interval').value;
    var count = document.getElementById('Count').value;
    var startDate = moment(startDateString, "DD-MM-YYYY");
    console.log('Start date is' + startDate);
    var meetingDates = GenerateMeetingDates(startDate, interval, count);
    var list = document.getElementById("meetingsPreviewList");

    meetingDates.forEach(element => {
        console.log(new Date(element).toLocaleDateString("en-US"));
        var listNode = document.createElement('li');
        listNode.className = "item text-center";
        var textNode = document.createTextNode(moment(element).format("DD-MM-YYYY"));
        listNode.appendChild(textNode);
        list.appendChild(listNode);
    });
}

<script type="text/javascript">
    $(document).ready(function () {
        UpdateMeetingsPreview();
        $("input").change(function () {
        UpdateMeetingsPreview();
});
});
</script>

