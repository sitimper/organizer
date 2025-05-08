import json

def process_chart_dataset(            
        label: str,
        data: str,
        border_color: str,
        background_color: str
        ):
    data_list = data.split(";")
    for i in range(len(data_list)):
        data_list[i] = data_list[i].strip()
    dataset = {
        "label": label,
        "data": data_list, 
        "borderColor": border_color, 
        "backgroundColor": background_color
        }
    dataset = json.dumps(dataset)

    return dataset